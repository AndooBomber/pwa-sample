import React from 'react'
type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>
  setImgSrc: React.Dispatch<React.SetStateAction<string>>
  setToken: React.Dispatch<React.SetStateAction<string>>
  onClick: () => Promise<void>
}

const FormComponent: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center py-12 px-4 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="pt-6 text-center text-3xl font-extrabold text-gray-900">
            Register your account
          </h2>
        </div>
        <div className="space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                onChange={(e) => props.setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="imgSrc" className="sr-only">
                ImgSrc
              </label>
              <input
                id="imgSrc"
                name="imgSrc"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Image URL"
                onChange={(e) => props.setImgSrc(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="token" className="sr-only">
                Token
              </label>
              <input
                id="token"
                name="token"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Token"
                onChange={(e) => props.setToken(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={props.onClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormComponent
