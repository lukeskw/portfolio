export default function Header() {
  return (
    <header className="flex w-full items-end justify-end">
      <div className="flex px-0 md:px-12">
        <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          pt-BR
        </span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div
            className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300
          after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none
          peer-focus:ring-4 peer-focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-gray-800"
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            en-US
          </span>
        </label>
      </div>
    </header>
  )
}
