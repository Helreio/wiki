---
title: Smite Spell List
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
    - type_2 == "smite"
properties:
  file.name:
    displayName: Blessings
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
  note.damage_type:
    displayName: Damage
  note.tier:
    displayName: Tier
views:
  - type: table
    name: Table
    order:
      - file.name
      - tldr
      - tier
    sort:
      - property: description
        direction: ASC
      - property: range
        direction: DESC
    columnSize:
      file.name: 173

```
