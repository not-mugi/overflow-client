export default function Home() {
  return (
    <div>
      <section className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800">
          欢迎来到 SegmentFault
        </h1>
        <p className="mt-4 text-gray-600">
          一个开放式协作的问答社区，消除开发领域的知识不平等。
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="px-6 py-2 bg-mugi-400 text-white rounded hover:bg-green-600"
          >
            立即提问
          </a>
          <a
            href="#"
            className="ml-4 px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            浏览热门问题
          </a>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">最新问答</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              使用 apt 安装的 python 第三方包的版本为什么这么滞后？
            </h3>
            <p className="mt-2 text-gray-600">
              7 分钟前提问 • 0 回答 • 22 阅读
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              C++是否有集中的点（比如一个网站），用于积累所有的C++使用的三方库？
            </h3>
            <p className="mt-2 text-gray-600">
              10 分钟前提问 • 0 回答 • 20 阅读
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-white mt-12 py-6 shadow">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2025 SegmentFault. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
