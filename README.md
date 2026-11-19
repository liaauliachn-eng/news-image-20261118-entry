# news-image-20261118-entry

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/liaauliachn-eng/news-image-20261118-entry/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/liaauliachn-eng/news-image-20261118-entry/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image that sums up Wednesday, 18 November 2026, in world news. The poster
(`entry.png`, 1024×1024) is a front-page-style collage: the Shenzhen trilateral
summit dominates the top, with the day's other headlines arranged below it as
photo-style panels, so the whole day reads at a glance.

## The news in the image

- **Trump, Xi and Putin meet in Shenzhen** — the first trilateral summit of the
  three leaders, covering Ukraine, nuclear risk and global security.
- **Crimean Bridge partially collapses** — a Ukrainian strike severs the road
  link to occupied Crimea.
- **Peltola wins Alaska** — Democrat Mary Peltola defeats Dan Sullivan, giving
  Democrats a projected 56–44 Senate majority.
- **ICJ rules on the Rohingya** — the International Court of Justice finds
  Myanmar responsible for genocide against the Rohingya.
- **Gaza ceasefire at risk** — the Board of Peace warns the truce could collapse.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to the grader's
output directory, refusing to ship an image over the 1 MiB gate. No network, no
image processing — every run writes identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=x0y2c17b&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
