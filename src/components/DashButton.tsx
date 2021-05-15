import './DashButton.css';

interface ContainerProps {
  content: any;
  color: String,
}

const DashButton: React.FC<ContainerProps> = ({ content, color }) => {
  return (
    <button className="dash-button">
      <strong>{content}</strong>
    </button>
  );
};

export default DashButton;
