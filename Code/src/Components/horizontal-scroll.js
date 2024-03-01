import React, { useEffect } from "react";
import "./horizontal-scroll.css";

const Index = () => {
  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;

    const scroll = () => {
      if (container.scrollLeft < scrollWidth - containerWidth) {
        container.scrollLeft += 0.05; // Adjust the scroll speed by changing this value
      } else {
        container.scrollLeft = 0;
      }
    };

    const scrollInterval = setInterval(scroll, 55); // Adjust the interval for smoother or faster scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/l0xdrok4motddkv9lonh.png"
          }
          alt="adidas"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/hrrdxyjmfprjmyhj1rrm.png"
          }
          alt="amul"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/cvp9fmnppm1muwpqx7ww.jpg"
          }
          alt="apollotyre"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/pxdv9daogyi0h2af7tqy.png"
          }
          alt="asianpaints"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/hdjydmwx1oklovyrer2t.png"
          }
          alt="chanel"
          className="image"
        />
        {/* <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707027647/Horizontal/cipla.png"
          }
          alt="cipla"
          className="image"
        /> */}
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/ib7rv95gzgowkzxf12em.png"
          }
          alt="cococola"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028073/Horizontal/nhqcaavvhygynmzbuo90.png"
          }
          alt="colgate"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028073/Horizontal/iqf0mu4yddrmtyy8kemn.png"
          }
          alt="dior"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028074/Horizontal/vgquzlaonirrajvjyxm9.jpg"
          }
          alt="fasttrack"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028074/Horizontal/x3usp01uvfabsiicjdkx.png"
          }
          alt="gucci"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028241/Horizontal/h9d1e7mgaz15i93ntgsk.png"
          }
          alt="lakme"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028242/Horizontal/ld1b9224migeptzmploy.jpg"
          }
          alt="lays"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028246/Horizontal/niwsythzk8f3hk9h9zpe.png"
          }
          alt="zara"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028246/Horizontal/s4vuphogtfnmmflh5ent.png"
          }
          alt="wow"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028246/Horizontal/rfnotfjlcq7kistnvtkp.png"
          }
          alt="UNILIVER"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028246/Horizontal/cq9rowk5tqxodbdgtdv1.png"
          }
          alt="sugar"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028246/Horizontal/uu23ulg4mvmido0jwhe5.png"
          }
          alt="rolex"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028245/Horizontal/uoqv3lxd1m12alky6e2l.png"
          }
          alt="redbull"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028245/Horizontal/bscvutdacgsqkkf82lpt.png"
          }
          alt="rayban"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028245/Horizontal/lxkkjcn9kgn6xhxsudnu.png"
          }
          alt="puma"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028245/Horizontal/iigz4uyngckwvk1t0tk1.png"
          }
          alt="prada"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028245/Horizontal/s1yryuwwahuw0sryqlnq.png"
          }
          alt="polycab"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028244/Horizontal/dlaxy6f0gbw20o10ciom.png"
          }
          alt="peterengland"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028244/Horizontal/v5tpmajt3ev6mdu52w7s.png"
          }
          alt="nike"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028244/Horizontal/h28acyy24hnlzwjwmxsg.png"
          }
          alt="nestle"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028243/Horizontal/rw3gkuv4zgbkamkca0iq.png"
          }
          alt="maybelline"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028243/Horizontal/th0xfpfbxz4fxizwp5xb.png"
          }
          alt="mac"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028242/Horizontal/ntdnd8gjwl9lw80fnkka.png"
          }
          alt="louis"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028242/Horizontal/wnyr9wfqrbs04kj58ml0.png"
          }
          alt="loreal"
          className="image"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "https://res.cloudinary.com/drf1yrgws/image/upload/v1707028072/Horizontal/l0xdrok4motddkv9lonh.png"
          }
          alt="adidas"
          className="image"
        />
      </div>
    </div>
  );
};

export default Index;
