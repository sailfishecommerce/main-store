import Modal from "@/components/modal";
import Tab from "@/components/tabs";

interface Props {
  show: boolean;
  onHide: () => void;
}

export default function AuthModal({ show, onHide }: Props) {
  return (
    <Modal modal={show} modalHandler={onHide}>
      <Tab />
    </Modal>
  );
}
