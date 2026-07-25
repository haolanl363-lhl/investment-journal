import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Diary from "./components/Diary";
import Market from "./components/Market";
import Analysis from "./components/Analysis";
import AIReview from "./components/AIReview";

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [page, setPage] = useState("home");


  function changePage(name){
    setPage(name);
    setMenuOpen(false);
  }


  return (
    <div className="app">


      {/* 左侧菜单 */}
      <Sidebar
        open={menuOpen}
        close={()=>setMenuOpen(false)}
        changePage={changePage}
      />


      {/* 遮罩 */}
      {menuOpen && (
        <div
          className="mask"
          onClick={()=>setMenuOpen(false)}
        ></div>
      )}



      <main>


        {/* 顶部 */}
        <header>

          <button
            className="menuBtn"
            onClick={()=>setMenuOpen(true)}
          >
            ☰
          </button>


          <h1>
            📈 投资日记
          </h1>

        </header>




        {/* 页面内容 */}

        {
          page==="home" &&
          <>

          <section className="card hero">

            <h2>
              📖 今日投资日记
            </h2>

            <p>
              记录想法，而不是记录价格
            </p>

          </section>


          <Market />

          </>

        }



        {
          page==="diary" &&
          <Diary />
        }



        {
          page==="analysis" &&
          <Analysis />
        }



        {
          page==="ai" &&
          <AIReview />
        }



        {
          page==="wrong" &&
          <section className="card">

            <h2>
              ❌ 错题本
            </h2>

            <p>
              暂无错题记录
            </p>

          </section>
        }



      </main>


    </div>
  )
}
