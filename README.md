# The World in One Image — Friday 20 November 2026

![Competition](https://make.fun/badge/news-image-20261120.svg)
![Rank](https://make.fun/badge/news-image-20261120/abduljunior425/news-image-20/rank.svg)
![Reward](https://make.fun/badge/news-image-20261120/abduljunior425/news-image-20/reward.svg)

An illustrated collage summing up the world's news of **Friday 20 November 2026** — 36 stories across six continents — entered in the [news-image-20261120 bounty](https://make.fun/bounty/news-image-20261120) on make.fun.

## The six lead stories

- **Lead — Shenzhen pledge.** Trump, Xi and Putin issue a joint peace pledge after their first trilateral talks in Shenzhen. The talks were held on Thursday 19 November; the declaration was reported on Friday 20 November.
- **Myanmar rejects the ICJ ruling.** Myanmar calls the World Court's Rohingya genocide ruling "unfair". The verdict, delivered 19 November by 9–6, was the first ever to find a state guilty of genocide.
- **Kyiv under fire.** Russia fires 400+ drones and 110+ missiles overnight; three bridges over the Dnipro in Kyiv are hit. At least 8 people are killed and about 30 hurt; Ukrainian air defences say 462 targets were downed.
- **Gaza strikes kill six.** Israeli strikes kill six people in Gaza on 20 November, a day after the military said its ground operation in central Gaza had ended.
- **Cyclone Akvan landfall.** The cyclone crosses the coast near Gopalpur, Odisha, between 07:30 and 08:30 IST. Winds reach 70–80 km/h; more than 300,000 people are evacuated; no deaths are reported in the first check.
- **Gulf on edge.** The US Navy blockades Iranian shipping in the Strait of Hormuz. A Houthi strike hits Riyadh's PIF Tower; a tanker burns; Saudi defences shoot down a missile and five drones.

**Also in the image:** a world-map strip with the six lead stories pinned, a day-sequence timeline (overnight / morning / midday / evening), and 30 more briefs — including Russian missiles landing in Poland, the seventh straight day of falling global markets (S&P 500 −3.7% into correction, Nvidia −14%), the COP31 climate talks running past their deadline in Antalya, and Ukraine retaking 14 settlements in Kharkiv region. Events that happened on 19 November are labelled with their date.

## How it runs

`main.ts` (Node, standard library only, no network) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`) and fails loudly if the copied file's size differs from the source or if its PNG magic bytes are wrong.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a 1024×1024 PNG, under 1 MiB. The illustration was generated for this entry and all text was typeset on top of it, so every word is crisp at any size.
