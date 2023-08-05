export interface inputJSONData {
  data: DataItem[];
  condition: ConditionItem[] | string[];
}

export interface DataItem {
  [key: string]: any;
}

export interface ConditionItem {
  [key: string]: any;
}

export interface Point {
  x: number;
  y: number;
  z: number;
}
