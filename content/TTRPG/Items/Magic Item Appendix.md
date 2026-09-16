---
title: Magic Item Appendix
type: item list
date:
draft: false
unlisted: false
password:
---
*Uncommon, Rare, Epic, Legendary, Mythic and Artifact*
==Cursed== items cannot be willingly unattuned. 

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
  note.attune:
    displayName: Attune
  note.item_type:
    displayName: Type
views:
  - type: table
    name: Table
    order:
      - file.name
      - item_type
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
  note.item_type:
    displayName: Type
  note.attune:
    displayName: Attune
views:
  - type: table
    name: Table
    order:
      - file.name
      - item_type
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

```base
filters:
  and:
    - file.inFolder("TTRPG/Items")
    - type == "item"
    - rarity == "Epic"
properties:
  file.name:
    displayName: Epic
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
  note.item_type:
    displayName: Type
  note.attune:
    displayName: Attune
views:
  - type: table
    name: Table
    order:
      - file.name
      - item_type
    sort:
      - property: attune
        direction: DESC
      - property: file.name
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
      file.name: 231

```

```base
filters:
  and:
    - file.inFolder("TTRPG/Items")
    - type == "item"
    - rarity == "Legendary"
properties:
  file.name:
    displayName: Legendary
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
  note.item_type:
    displayName: Type
  note.attune:
    displayName: Attune
views:
  - type: table
    name: Table
    order:
      - file.name
      - item_type
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

```base
filters:
  and:
    - file.inFolder("TTRPG/Items")
    - type == "item"
    - rarity == "Mythic"
properties:
  file.name:
    displayName: Mythic
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
  note.item_type:
    displayName: Type
  note.attune:
    displayName: Attune
views:
  - type: table
    name: Table
    order:
      - file.name
      - item_type
    sort:
      - property: attune
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
      file.name: 231

```

```base
filters:
  and:
    - file.inFolder("TTRPG/Items")
    - type == "item"
    - rarity == "Artifact"
properties:
  file.name:
    displayName: Artifact
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
  note.item_type:
    displayName: Type
  note.attune:
    displayName: Attune
views:
  - type: table
    name: Table
    order:
      - file.name
      - item_type
    sort:
      - property: attune
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
      file.name: 231

```

```base
filters:
  and:
    - file.inFolder("TTRPG/Item Sets")
    - type == "item set"
properties:
  file.name:
    displayName: Item Sets
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
  note.item_type:
    displayName: Type
  note.attune:
    displayName: Attune
  note.set_items:
    displayName: Set Items
  note.set_item_number:
    displayName: Set Items
views:
  - type: table
    name: Table
    order:
      - file.name
      - set_item_number
    sort:
      - property: set_item_number
        direction: ASC
      - property: attune
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
      file.name: 256

```
