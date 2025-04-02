const left_tailwind_classes_map = {
  xs: "left-1",
  sm: "left-3",
  base: "left-5",
  lg: "left-7",
  xl: "left-11",
  "-xs": "left-1",
  "-sm": "left-3",
  "-base": "left-5",
  "-lg": "left-7",
  "-xl": "left-11",
  none: "left-0",
};

const right_tailwind_classes_map = {
  xs: "right-1",
  sm: "right-3",
  base: "right-5",
  lg: "right-7",
  xl: "right-11",
  "-xs": "right-1",
  "-sm": "right-3",
  "-base": "right-5",
  "-lg": "right-7",
  "-xl": "right-11",
  none: "right-0",
};

type TagLeft = keyof typeof left_tailwind_classes_map;

type AbsoluteTag = {
  content: string;
  left?: TagLeft;
  right?: TagRight;
};

type TagRight = keyof typeof right_tailwind_classes_map;

export default function AbsoluteTag({ content, left, right }: AbsoluteTag) {
  const controlled = [];
  if (left) {
    controlled.push(left_tailwind_classes_map[left]);
  }
  if (right) {
    controlled.push(right_tailwind_classes_map[right]);
  }
  const controlled_classes = controlled.join(" ");

  return (
    <span
      className={`text-xxs ${controlled_classes} text-mugi-red-500 p-1 absolute bg-mugi-400 rounded-sm border border-gray-200/50 -top-1`}
    >
      {content}
    </span>
  );
}
