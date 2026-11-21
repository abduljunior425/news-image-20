# The World in One Image — Friday 20 November 2026

![Competition](https://make.fun/badge/news-image-20261120.svg)
![Rank](https://make.fun/badge/news-image-20261120/abduljunior425/news-image-20/rank.svg)
![Reward](https://make.fun/badge/news-image-20261120/abduljunior425/news-image-20/reward.svg)

A dense broadsheet summing up the world's news of **Friday 20 November 2026** in **51 stories across six continents**, entered in the [news-image-20261120 bounty](https://make.fun/bounty/news-image-20261120) on make.fun: 3 lead stories, a world map with 12 numbered pins, a UTC timeline of the day, 33 briefs grouped by region, and a sources footer with a date check.

## The three lead stories

- **Shenzhen declaration.** Trump, Xi and Putin issue a joint peace pledge after their first trilateral talks: "a nuclear war cannot be won and must never be fought". The talks were held on Thursday 19 November at Kylin Villa, Shenzhen; the declaration was reported on Friday 20 November. Trump called the meeting "bigger than Yalta" and rated it "12 out of 10".
- **Kyiv under fire.** Russia fires 400+ drones and 110+ missiles at Ukraine overnight; three bridges over the Dnipro in Kyiv are hit, 8 people are killed and about 30 injured, and two Russian missiles fall in Poland's Lublin and Subcarpathian regions, a NATO member, with no casualties. Ukraine says it intercepted 462 targets.
- **Cyclone Akvan makes landfall.** The cyclone crosses the coast near Gopalpur, Odisha, at 02:00–03:00 UTC on 20 November, with winds of 70–80 km/h gusting to 90; more than 300,000 people were evacuated and no deaths were reported in the first assessment.

Every story in the image happened on, or was first reported on, Friday 20 November 2026; follow-ups from 19 November (the ICJ ruling, the Shenzhen talks themselves, the Senate bill, the Somalia expulsion order, the Denmark Arctic vote, the Raoni land recognition) are labelled with their date.

## How it runs

`main.ts` (Node, standard library only, no network) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`), checks the PNG magic bytes before and after copying, and fails loudly on a size mismatch or a file over the 1 MiB gate.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a 1024×1024 PNG, under 1 MiB. The three lead illustrations were generated for this entry and all text was typeset on top of them, so every word is crisp at any size.
