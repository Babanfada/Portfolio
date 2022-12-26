import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 0,
    textDecoration: "none",
    color: router.asPath === href ? "pink" : "white",
    backgroundColor:
      router.asPath === href ? "rgba(255, 255, 255, 0.109)" : "transparent",
    borderRadius: "50%",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
