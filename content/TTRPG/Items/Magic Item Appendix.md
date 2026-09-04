---
title: Magic Item Appendix
type: item list
date:
draft: false
unlisted: false
password:
---
*Uncommon, Rare, Epic, Legendary and Mythic*
**Cursed** items cannot be willingly unattuned. 
```base
filters:
  and:
    - file.inFolder("TTRPG/Items")
    - type == "item"
    - rarity == "Uncommon"
properties:
  file.name:
    displayName: Uncommon
  note.casting_time:
    displayName: Casting Time
  note.components:
    displayName: Components
  note.range:
    displayName: Range
  note.description:
    displayName: Description
  note.tldr:
    displayName: TL:DR
  note.tier:
    displayName: Tier
views:
  - type: table
    name: Table
    order:
      - file.name
      - tldr
    sort:
      - property: tldr
        direction: ASC
      - property: tier
        direction: ASC
      - property: casting_time
        direction: ASC
      - property: description
        direction: ASC
      - property: range
        direction: DESC
    columnSize:
      file.name: 282

```

```base
filters:
  and:
    - file.inFolder("TTRPG/Items")
    - type == "item"
    - rarity == "Rare"
properties:
  file.name:
    displayName: Rare
  note.casting_time:
    displayName: Casting Time
  note.components:
    displayName: Components
  note.range:
    displayName: Range
  note.description:
    displayName: Description
  note.tldr:
    displayName: TL:DR
  note.tier:
    displayName: Tier
views:
  - type: table
    name: Table
    order:
      - file.name
      - tldr
    sort:
      - property: tier
        direction: ASC
      - property: casting_time
        direction: ASC
      - property: description
        direction: ASC
      - property: range
        direction: DESC
    columnSize:
      file.name: 231

```
