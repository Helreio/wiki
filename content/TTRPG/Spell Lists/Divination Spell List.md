---
title: Divination Spell List
type: spell list
date:
draft: false
unlisted: false
password:
---
```base
filters:
  and:
    - file.inFolder("TTRPG/Spells")
    - type_2 == "divination"
properties:
  file.name:
    displayName: Spells
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
      - casting_time
      - tldr
      - tier
    sort:
      - property: file.name
        direction: ASC
      - property: casting_time
        direction: ASC
      - property: description
        direction: ASC
      - property: range
        direction: DESC
    columnSize:
      file.name: 173
      note.casting_time: 177

```
