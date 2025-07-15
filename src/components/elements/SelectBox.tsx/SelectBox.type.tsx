export default interface SelectBoxProps {
  label: string;
  name: string;
  id: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  changeBoxSize: string;
}
