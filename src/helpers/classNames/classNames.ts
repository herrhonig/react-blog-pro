type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {

  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => !!value) // Фильтруем моды, где value === true;
      .map(([className, value]) => className) // Возвращает массив classnames, где value === true после фильтра
  ]
    .join(' ');
}

/* Передаем название класса;
моды с поведением элемента;
и последним аргументом - массив доп. классов
*/

classNames('remove-btn', { hovered: true, selectable: true, red: true }, ['pdg']);
