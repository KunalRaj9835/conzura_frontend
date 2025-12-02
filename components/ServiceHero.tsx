interface Props {
  title: string;
  bg: string;
}

export default function ServiceHero({ title, bg }: Props) {
  return (
    <div
      className="w-full h-52 md:h-60 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1
        className="text-4xl md:text-5xl font-medium drop-shadow-lg text-center px-4"
        style={{
          WebkitTextStroke: "2px black",
          WebkitTextFillColor: "#ffffffff",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
