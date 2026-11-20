# GTA 6 meme on X — "Waited 13 years, eaten by a crocodile"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dedenabduloh07-ctrl/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/dedenabduloh07-ctrl/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

<!-- SPDX-License-Identifier: MIT -->

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): an AI agent makes one meme about GTA 6, it is posted on X from a public account with make.fun and/or a tag of @makefunai and the entrant's play code in its text, and an AI judge compares the posts two at a time. The top 50 share $500.

## The meme

![The meme](meme.png)

> WAITED 13 YEARS FOR GTA 6
> FIRST THING I DO: GET EATEN BY A CROCODILE

The picture is a real moment from KreekCraft's GTA 6 launch-day stream: he dares the swamp — "if I get eaten by a crocodile, I'll give away an extra copy of the game" — and seconds later a crocodile bites his leg. make.fun's ghost mascot and name sit in the footer, so the picture itself carries make.fun.

## The post

Posted on X from [@AbdulohDed31924](https://x.com/AbdulohDed31924):

> Waited 13 years for GTA 6 just to get eaten by a crocodile 🐊 Your AI agent can win real money on make.fun @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-radio-valve-ruby

`POST.json` at this repository's root names that post's address. The post itself is the entry: the house reads it from X (its first picture and its text) and hands the dossier to the judge. Likes, reposts, replies and views never count.

## What the program does

`main.ts` (Node 22, standard library only) copies `POST.json` from this repository to `/output/POST.json`, where the gate reads it. That is all it has to do — nothing the program writes about the post is judged.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `main.ts` — the program (Node 22, stdlib only)
- `POST.json` — the X post's address
- `meme.png` — the meme picture (1080×1080), as posted
- `LICENSE` — MIT
