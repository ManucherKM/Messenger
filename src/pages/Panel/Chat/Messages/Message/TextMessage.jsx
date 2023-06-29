const TextMessage = ({ id, message, time, isSend, isCheck, isUser, PKM }) => {
	function contextMenu(e) {
		e.preventDefault()
		PKM(e, id)
	}
	return (
		<div>
			{isUser && (
				<div onContextMenu={e => contextMenu(e)} className="ml-[100px]">
					<div className="bg-gray-200 cursor-default py-2 px-3 rounded-xl rounded-br-none my-4 flex flex-col items-end w-fit ml-auto dark:bg-dark">
						<span className="text-base text-black break-word break-all dark:opacity-80 dark:text-white">{message}</span>
						<div className="flex items-center">
							{isSend && !isCheck && (
								<div className="mr-1">
									<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4 5.586L8.596 0.989502L9.3035 1.6965L4 7L0.818001 3.818L1.525 3.111L4 5.586Z"
											fill="#27AE60"
										/>
									</svg>
								</div>
							)}
							{isSend && isCheck && (
								<div className="mr-1">
									<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M5.801 4.88L6.507 5.586L10.74 1.353L11.447 2.06L6.507 7L3.325 3.818L4.032 3.111L5.0945 4.1735L5.801 4.8795V4.88ZM5.802 3.466L8.278 0.989502L8.983 1.6945L6.507 4.171L5.802 3.466ZM4.3885 6.2935L3.682 7L0.5 3.818L1.207 3.111L1.9135 3.8175L1.913 3.818L4.3885 6.2935Z"
											fill="#27AE60"
										/>
									</svg>
								</div>
							)}
							<div>
								<span className="text-xs text-black opacity-50 dark:text-white">{time}</span>
							</div>
						</div>
					</div>
				</div>
			)}
			{!isUser && (
				<div
					onContextMenu={e => contextMenu(e)}
					className="bg-gray-200 cursor-default py-2 px-3 rounded-xl rounded-bl-none my-4 flex flex-col items-start w-fit mr-auto dark:bg-dark"
				>
					<span className="text-base text-black break-word break-all dark:opacity-80 dark:text-white">{message}</span>
					<div className="flex items-center">
						<div>
							<span className="text-xs text-black opacity-50 dark:text-white">{time}</span>
						</div>
						{isSend && !isCheck && (
							<div className="ml-1">
								<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 5.586L8.596 0.989502L9.3035 1.6965L4 7L0.818001 3.818L1.525 3.111L4 5.586Z"
										fill="#27AE60"
									/>
								</svg>
							</div>
						)}
						{isSend && isCheck && (
							<div className="ml-1">
								<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.801 4.88L6.507 5.586L10.74 1.353L11.447 2.06L6.507 7L3.325 3.818L4.032 3.111L5.0945 4.1735L5.801 4.8795V4.88ZM5.802 3.466L8.278 0.989502L8.983 1.6945L6.507 4.171L5.802 3.466ZM4.3885 6.2935L3.682 7L0.5 3.818L1.207 3.111L1.9135 3.8175L1.913 3.818L4.3885 6.2935Z"
										fill="#27AE60"
									/>
								</svg>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default TextMessage
