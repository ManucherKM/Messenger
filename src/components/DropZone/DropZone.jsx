import { useState } from 'react'

const DropZone = ({ stylesWrapper = '', stylesDropZone = '', uploadDropZone, getFiles }) => {
	const [isDragOver, setIsDragOver] = useState(false)

	function clickWrapperDark() {
		uploadDropZone()
	}

	function changeHandler(e) {
		getFiles(e.target.files)
		uploadDropZone()
	}

	function dropHandler(e) {
		e.preventDefault()
		getFiles(e.dataTransfer.files)
		uploadDropZone()
	}

	return (
		<div className={stylesWrapper} onClick={clickWrapperDark}>
			<div
				className={`flex items-center justify-center w-full h-full ${stylesDropZone}`}
				onClick={e => e.stopPropagation()}
			>
				<label
					onDragOver={e => {
						e.preventDefault()
						setIsDragOver(true)
					}}
					onDragLeave={() => setIsDragOver(false)}
					onDrop={dropHandler}
					htmlFor="dropzone-file"
					className={[
						'flex-center flex-col w-full h-full border-2 border-green border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-dark hover:bg-gray-100 dark:border-green dark:hover:border-gray-500 dark:hover:bg-gray-800',
						isDragOver && 'opac',
					].join(' ')}
				>
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							aria-hidden="true"
							className="w-14 h-14 mb-6 text-green"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
							></path>
						</svg>
						<p className="mb-2 text-lg text-green dark:text-green">
							<span className="font-semibold">Click to upload</span> or drag and drop
						</p>
					</div>
					<input onChange={changeHandler} multiple id="dropzone-file" type="file" className="hidden" />
				</label>
			</div>
		</div>
	)
}

export default DropZone
