import Avatar from "react-avatar";

interface IProps {
  name: string;
  textSizeRatio?: number;
  size?: string;
  round?: string;
}

const AvatarComponent = (props: IProps) => {
  return (
    <Avatar
      name={props.name}
      textSizeRatio={2}
      size={props.size ? props.size : "27"}
      round={props.round ? props.round : "100%"}
    />
  );
};

export default AvatarComponent;
