import React from "react";
import Image from "next/image";
import bg from "../../public/bg-grp5.jpg";
import Link from "next/link";

function About() {
  return (
    <div className="grid xl:grid-cols-2 p-4 items-center ">
      <div className="relative w-full h-full max-w-[768px] aspect-video mx-auto  ">
        <Image
          src={bg}
          className="rounded-xl "
          fill
          quality={100}
          priority
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="  max-w-screen-xl p-4 font-mono ">
        <h1 className="text-center p-4 italic font-bold">About Twice</h1>
        <p className="p-4 text-justify leading-loose">
          Twice is a South Korean girl group formed by JYP Entertainment. The
          group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana,
          Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. Twice was formed under the
          television program Sixteen and debuted on October 20, 2015, with the
          extended play The Story Begins.
        </p>
        <p className="p-4 text-center font-extrabold italic">
          "They will be able to move people twice. Once through the ears and
          once through the eyes."
        </p>
        <div className="text-center">
          <Link
            href="/members"
            className="text-md  bg-bg4 inline-block my-2 py-2 p-4 rounded text-white hover:bg-bg5 ">
            <span>View Members</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
