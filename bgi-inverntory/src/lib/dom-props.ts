// lib/dom-props.ts
export function extractStyleProps<T extends Record<string, any>>(
  props: T,
  styleKeys: string[]
): { styles: React.CSSProperties; rest: Omit<T, keyof typeof styleKeys> } {
  const styles: any = {};
  const rest: any = {};
  
  for (const key of Object.keys(props)) {
    if (styleKeys.includes(key)) {
      styles[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  }
  
  return { styles, rest };
}