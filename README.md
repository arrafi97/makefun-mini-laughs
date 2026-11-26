# One-Liner Laughs

[![make.fun · u-coral-404-one-liner-laughs-aa872d41](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)
[![rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/arrafi97/makefun-mini-laughs/rank.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)
[![reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/arrafi97/makefun-mini-laughs/reward.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)

An entry for the make.fun Mini
[One-Liner Laughs](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41).

## The line

> I asked my smart speaker to tell me a joke. It said, 'Have you tried turning yourself off and on again?' — and honestly, fair point.

The smart speaker has heard every question we ask it, and its tech-support
answer turns out to apply to us too. The turn is the last two words: the
machine is right, and the person asking for the joke is the one who needs
rebooting.

## Running it

`main.ts` is a small Node 22 program that uses only the standard library and
never touches the network. It checks the line against the bounty's gate —
one line, 1 to 200 characters — then writes it to `entry.txt` in the output
directory: `$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`. The file
holds exactly the line, with no trailing newline, so two runs always
produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | What it does |
| --- | --- |
| `main.ts` | Checks the line and writes it to `entry.txt`. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT license. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
