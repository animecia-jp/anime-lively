-- =========================================================
-- Anime Lively
-- Initial Database Schema
-- =========================================================

create extension if not exists pgcrypto;


-- =========================================================
-- PROFILES
-- =========================================================

create table if not exists public.profiles (

  id uuid
    primary key
    references auth.users(id)
    on delete cascade,

  username text
    unique
    not null,

  display_name text,

  bio text,

  avatar_url text,

  created_at timestamptz
    not null
    default now()

);


-- =========================================================
-- ANIME
-- =========================================================

create table if not exists public.anime (

  id bigint
    generated always as identity
    primary key,

  public_id text
    unique
    not null,

  title text
    not null,

  title_en text,

  year integer,

  season text,

  type text,

  episodes integer,

  status text,

  score numeric(3,2),

  popularity numeric(5,2)
    default 0,

  trend numeric(5,2)
    default 0,

  core_popularity numeric(5,2)
    default 0,

  description text,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()

);


-- =========================================================
-- GENRES
-- =========================================================

create table if not exists public.genres (

  id bigint
    generated always as identity
    primary key,

  name text
    unique
    not null

);


create table if not exists public.anime_genres (

  anime_id bigint
    references public.anime(id)
    on delete cascade,

  genre_id bigint
    references public.genres(id)
    on delete cascade,

  primary key (
    anime_id,
    genre_id
  )

);


-- =========================================================
-- TAGS
-- =========================================================

create table if not exists public.tags (

  id bigint
    generated always as identity
    primary key,

  name text
    unique
    not null

);


create table if not exists public.anime_tags (

  anime_id bigint
    references public.anime(id)
    on delete cascade,

  tag_id bigint
    references public.tags(id)
    on delete cascade,

  primary key (
    anime_id,
    tag_id
  )

);


-- =========================================================
-- USER ANIME
-- =========================================================

create table if not exists public.user_anime (

  user_id uuid
    references public.profiles(id)
    on delete cascade,

  anime_id bigint
    references public.anime(id)
    on delete cascade,

  status text
    not null
    default 'planned',

  progress integer
    not null
    default 0,

  score numeric(3,1),

  favorite boolean
    not null
    default false,

  updated_at timestamptz
    not null
    default now(),

  primary key (
    user_id,
    anime_id
  )

);


-- =========================================================
-- REVIEWS
-- =========================================================

create table if not exists public.reviews (

  id bigint
    generated always as identity
    primary key,

  user_id uuid
    references public.profiles(id)
    on delete cascade,

  anime_id bigint
    references public.anime(id)
    on delete cascade,

  score numeric(3,1),

  title text,

  body text
    not null,

  spoiler boolean
    not null
    default false,

  likes_count integer
    not null
    default 0,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()

);


-- =========================================================
-- REVIEW LIKES
-- =========================================================

create table if not exists public.review_likes (

  review_id bigint
    references public.reviews(id)
    on delete cascade,

  user_id uuid
    references public.profiles(id)
    on delete cascade,

  primary key (
    review_id,
    user_id
  )

);


-- =========================================================
-- COMMENTS
-- =========================================================

create table if not exists public.comments (

  id bigint
    generated always as identity
    primary key,

  review_id bigint
    references public.reviews(id)
    on delete cascade,

  user_id uuid
    references public.profiles(id)
    on delete cascade,

  body text
    not null,

  spoiler boolean
    not null
    default false,

  created_at timestamptz
    not null
    default now()

);


-- =========================================================
-- FOLLOWS
-- =========================================================

create table if not exists public.follows (

  follower_id uuid
    references public.profiles(id)
    on delete cascade,

  following_id uuid
    references public.profiles(id)
    on delete cascade,

  created_at timestamptz
    not null
    default now(),

  primary key (
    follower_id,
    following_id
  ),

  check (
    follower_id <> following_id
  )

);


-- =========================================================
-- NOTIFICATIONS
-- =========================================================

create table if not exists public.notifications (

  id bigint
    generated always as identity
    primary key,

  user_id uuid
    references public.profiles(id)
    on delete cascade,

  kind text
    not null,

  payload jsonb
    not null
    default '{}',

  read_at timestamptz,

  created_at timestamptz
    not null
    default now()

);


-- =========================================================
-- EXTERNAL IDS
-- =========================================================

create table if not exists public.external_ids (

  anime_id bigint
    references public.anime(id)
    on delete cascade,

  source text
    not null,

  source_id text
    not null,

  last_synced_at timestamptz,

  primary key (
    source,
    source_id
  )

);


-- =========================================================
-- INDEXES
-- =========================================================

create index if not exists
anime_year_idx
on public.anime(year);


create index if not exists
anime_score_idx
on public.anime(score desc);


create index if not exists
anime_popularity_idx
on public.anime(popularity desc);


create index if not exists
anime_trend_idx
on public.anime(trend desc);


create index if not exists
anime_core_idx
on public.anime(core_popularity desc);


create index if not exists
reviews_anime_idx
on public.reviews(
  anime_id,
  created_at desc
);


create index if not exists
user_anime_status_idx
on public.user_anime(
  user_id,
  status
);


create index if not exists
notifications_user_idx
on public.notifications(
  user_id,
  created_at desc
);


-- =========================================================
-- ROW LEVEL SECURITY
-- =========================================================

alter table public.profiles
enable row level security;

alter table public.user_anime
enable row level security;

alter table public.reviews
enable row level security;

alter table public.comments
enable row level security;

alter table public.follows
enable row level security;

alter table public.notifications
enable row level security;


-- =========================================================
-- PROFILE POLICY
-- =========================================================

create policy
"public profiles readable"

on public.profiles

for select

using (true);


-- =========================================================
-- USER ANIME POLICY
-- =========================================================

create policy
"users manage own anime list"

on public.user_anime

for all

using (
  auth.uid() = user_id
)

with check (
  auth.uid() = user_id
);


-- =========================================================
-- REVIEWS
-- =========================================================

create policy
"reviews readable"

on public.reviews

for select

using (true);


create policy
"users create own reviews"

on public.reviews

for insert

with check (
  auth.uid() = user_id
);


create policy
"users update own reviews"

on public.reviews

for update

using (
  auth.uid() = user_id
);


create policy
"users delete own reviews"

on public.reviews

for delete

using (
  auth.uid() = user_id
);


-- =========================================================
-- COMMENTS
-- =========================================================

create policy
"comments readable"

on public.comments

for select

using (true);


create policy
"users create own comments"

on public.comments

for insert

with check (
  auth.uid() = user_id
);


-- =========================================================
-- FOLLOWS
-- =========================================================

create policy
"users manage own follows"

on public.follows

for all

using (
  auth.uid() = follower_id
)

with check (
  auth.uid() = follower_id
);


-- =========================================================
-- NOTIFICATIONS
-- =========================================================

create policy
"users read own notifications"

on public.notifications

for select

using (
  auth.uid() = user_id
);
