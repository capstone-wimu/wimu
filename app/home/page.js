import React from "react";
import Image from "next/image";
import DefaultLayout from "../components/layouts/defaultLayout";
import Link from "next/link";

const data = [
  {
    title: "Pembayaran UKT",
    description: "Pembayaran UKT UNSIKA 2023 sudah dibuka",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: "https://picsum.photos/1200/1200",
  },
  {
    title: "Penerimaan Mahasiswa Baru",
    description: "Penerimaan Mahasiswa Baru UNSIKA 2023",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: "https://picsum.photos/1200/1200",
  },
  {
    title: "Pengumuman Jadwal Pembelajaran TA 2023/2024",
    description: "Pengumuman Jadwal Pelajaran TA 2023/2024 akan dibukan",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: null,
  },
];

const Home = () => {
  return (
    <DefaultLayout>
      <section className="container w-full flex">
        <div className="container min-w-[600px] max-sm:min-w-full">
          <div className="container hidden-scrollbar h-screen overflow-y-auto">
            <div className="container min-h-[54px] px-4 backdrop-blur-md bg-opacity-60 bg-white border-b border-gray-200 sticky top-0 z-50 flex items-center">
              <h1 className="text-xl font-bold">Beranda</h1>
            </div>
            {data.map((item) => (
              <div
                className="container px-4 py-3 border-b h-fit w-full border-gray-200 flex hover:bg-gray-100 cursor-pointer"
                key={item.title}
              >
                <div className="container h-full w-fit flex flex-col justify-start mr-3">
                  <Image
                    className="rounded-full"
                    src="/unsika.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="container flex items-start flex-col gap-1">
                  <div className="container w-full flex items-center gap-1">
                    <Link
                      href="#"
                      className="text-sm font-bold hover:underline"
                    >
                      Admin
                    </Link>
                    <p className="text-sm text-gray-500">• 15h</p>
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm z-10">{item.content}</p>
                  {item.img && (
                    <Link
                      href="#"
                      className="container border border-gray-200 active:border-2 active:border-blue-300 rounded-lg overflow-hidden flex justify-center"
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={512}
                        height={512}
                      />
                    </Link>
                  )}
                  <div className="container h-fit w-full flex justify-between mt-1">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-green-500"
                    >
                      <span className="flex items-center gap-1">
                        <i
                          className="material-icons-outlined"
                          style={{ fontSize: "18px" }}
                        >
                          comment
                        </i>
                        <p className="text-sm">213</p>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-red-500"
                    >
                      <span className="flex items-center gap-1">
                        <i
                          className="material-icons-outlined"
                          style={{ fontSize: "18px" }}
                        >
                          thumb_up
                        </i>
                        <p className="text-sm">892</p>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-blue-500"
                    >
                      <span className="flex items-center gap-1">
                        <i
                          className="material-icons-outlined"
                          style={{ fontSize: "18px" }}
                        >
                          visibility
                        </i>
                        <p className="text-sm">1220</p>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-yellow-500"
                    >
                      <span className="flex items-center gap-1">
                        <i
                          className="material-icons-outlined"
                          style={{ fontSize: "18px" }}
                        >
                          bookmark_border
                        </i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container hidden-scrollbar w-full border-l border-gray-200 max-lg:hidden overflow-y-auto overflow-x-hidden px-4 pt-1 flex flex-col items-center gap-4">
          <div className="container bg-gray-200 rounded-full w-full">
            <div className="container flex items-center">
              <i className="material-icons-outlined overflow-hidden pl-4 text-gray-400">
                search
              </i>
              <input
                type="text"
                placeholder="Ketik sesuatu..."
                className="w-full text-sm bg-transparent border:0 outline:0 focus:outline-none p-3"
              />
            </div>
          </div>
          <div className="container bg-gray-200 rounded-xl w-full overflow-hidden flex flex-col items-start gap-3">
            <div className="container px-4 py-3">
              <p className="text-xl font-bold ">Tags</p>
            </div>
            <Link
              className="container px-4 py-3 h-full w-full hover:bg-gray-100 flex justify-start"
              href="#"
            >
              <div className="container">
                <p className="text-sm font-bold ">Penerimaan Mahasiswa Baru</p>
                <p className="text-sm text-gray-500 ">Program Studi Hukum</p>
              </div>
              <i
                className="material-icons text-gray-500"
                style={{ fontSize: "18px" }}
              >
                more_horiz
              </i>
            </Link>
            <Link
              className="container px-4 py-3 h-full w-full hover:bg-gray-100 flex justify-start"
              href="#"
            >
              <div className="container">
                <p className="text-sm font-bold ">Penerimaan Mahasiswa Baru</p>
                <p className="text-sm text-gray-500 ">Program Studi Hukum</p>
              </div>
              <i
                className="material-icons text-gray-500"
                style={{ fontSize: "18px" }}
              >
                more_horiz
              </i>
            </Link>
            <Link
              className="container px-4 py-3 h-full w-full hover:bg-gray-100 flex justify-start"
              href="#"
            >
              <div className="container">
                <p className="text-sm font-bold ">Penerimaan Mahasiswa Baru</p>
                <p className="text-sm text-gray-500 ">Program Studi Hukum</p>
              </div>
              <i
                className="material-icons text-gray-500"
                style={{ fontSize: "18px" }}
              >
                more_horiz
              </i>
            </Link>
            <Link
              className="container px-4 py-3 h-full w-full hover:bg-gray-100 flex justify-start"
              href="#"
            >
              <div className="container">
                <p className="text-sm font-bold ">Penerimaan Mahasiswa Baru</p>
                <p className="text-sm text-gray-500 ">Program Studi Hukum</p>
              </div>
              <i
                className="material-icons text-gray-500"
                style={{ fontSize: "18px" }}
              >
                more_horiz
              </i>
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
