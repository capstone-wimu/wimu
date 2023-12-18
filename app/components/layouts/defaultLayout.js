import SideBar from "../sideBar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <section>
        <SideBar />
      </section>
      {children}
    </>
  );
}
