---
title: Incantation Spell List
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
    - type_2 == "incantation"
properties:
  file.name:
    displayName: Incantations
  note.casting_time:
    displayName: Casting Time
  note.components:
    displayName: Components
  note.range:
    displayName: Range
  note.description:
    displayName: Description
  note.faith:
    displayName: Faith
  note.tier:
    displayName: Tier
  note.tldr:
    displayName: TL:DR
  note.school:
    displayName: School
views:
  - type: table
    name: Table
    order:
      - file.name
      - tier
      - casting_time
      - tldr
    sort:
      - property: tier
        direction: ASC
      - property: tldr
        direction: ASC
      - property: faith
        direction: ASC
      - property: range
        direction: ASC
      - property: description
        direction: ASC
    columnSize:
      file.name: 242
      note.tier: 40
      note.casting_time: 158

```
