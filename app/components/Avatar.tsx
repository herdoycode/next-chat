interface Props {
  online: boolean;
  src?: string;
}

const Avatar = ({ online, src }: Props) => {
  return (
    <div className={online ? "avatar online" : "avatar"}>
      <div className="w-9 rounded-full">
        <img src={src ? src : "/zero.jpg"} alt="user" />
      </div>
    </div>
  );
};

export default Avatar;
