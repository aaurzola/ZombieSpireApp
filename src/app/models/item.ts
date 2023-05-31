export interface Item {
  id?: number,
  type: string,
  name: string,
  durability?: number,
  damage: number,
  rarity: string,
  description: string | null
}

export interface PlayerItem extends Item, Omit<Item, 'durability'> {
  currentDurability: number;
}
