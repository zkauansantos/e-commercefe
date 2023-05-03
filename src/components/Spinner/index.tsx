import { Ring } from './styles';

interface SpinnerProps {
  size: string
}

export default function Spinner({ size }: SpinnerProps) {
  return (
    <Ring size={size}>
      <div />
      <div />
      <div />
      <div />
    </Ring>
  );
}
