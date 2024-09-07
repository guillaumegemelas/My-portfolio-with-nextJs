import { Typography } from "../atom/Typography";

export const Project = ({
  name,
  description,
  // stargazerCount,
  url,
  homepageUrl,
  icon,
  image,
  //---------
  handleClick,
  showAlertOnClick,
  //---------
}) => {
  //---------------
  const handleNameClick = () => {
    if (showAlertOnClick) {
      handleClick();
    }
  };
  //-------------------
  return (
    <div className="flex flex-col gap-4 p-4 transition-transform w-60 rounded-2xl bg-paper hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 md:w-80 md:p-8">
      <div className="flex">
        {" "}
        {/* <p className="w-full text-left ">⭐ {stargazerCount}</p> */}
        <p className="w-full text-xl text-left">{icon}</p>
        <img
          className="mb-6 rounded-lg "
          // shadow-[0_10px_70px_-15px_rgba(0,0,0,0.3)]

          width={90}
          height={50}
          src={image}
          alt="r"
        />
      </div>

      <a onClick={handleNameClick} href={url}>
        <Typography className="font-bold" variant="h3">
          {name}
        </Typography>
      </a>
      <Typography variant="body2">{description}</Typography>
      {homepageUrl ? (
        <a className="underline text-primary" href={homepageUrl}>
          {homepageUrl.replace("https://", "")}
        </a>
      ) : null}
    </div>
  );
};
