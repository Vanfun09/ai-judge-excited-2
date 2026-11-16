# ai-judge-excited-2

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Vanfun09/ai-judge-excited-2/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Vanfun09/ai-judge-excited-2/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

This entry ships one image, entry.png, and a tiny Node 22 TypeScript program that publishes it as /output/entry.png for the judge. main.ts has no dependencies and copies the image into the directory named by MAKEFUN_OUTPUT_DIR, creating that directory when it does not exist.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
