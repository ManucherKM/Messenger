const ItemMessage = ({ img, isOnline, name, visibleMessage, time, isSend, isCheckFriend, isTyping, isCheckMe, noCheck }) => {

    const isMarkOne = isCheckMe && isSend && !isCheckFriend;

    const isMarkTwo = isCheckMe && isSend && isCheckFriend;

    return (
        <div className="flex">
            <div className="relative w-1/4">
                <img
                    className="w-12 h-12 object-cover rounded-full"
                    src={img}
                    alt="user"
                />
                {isOnline &&
                    <svg className="absolute left-[38px] bottom-1" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="dark:stroke-none" cx="4" cy="4" r="3.5" fill="#27AE60" stroke="white" />
                    </svg>
                }
            </div>
            <div className="w-2/4 flex flex-col justify-between">
                <span className="text-base font-medium opacity-80 text-black dark:text-white">
                    {name}
                </span>
                {!isTyping &&
                    <span className="text-base font-normal opacity-50 text-black dark:text-white">
                        {visibleMessage}
                    </span>
                }
                {isTyping &&
                    <span className="text-base font-normal text-green">
                        ... is typing
                    </span>
                }
            </div>
            <div className="w-1/4 flex flex-col items-end justify-between">
                <p className="text-base text-right opacity-70 text-black dark:text-white">
                    {time}
                </p>
                {!isCheckMe &&
                    < div className="bg-green rounded-full w-5 h-5 flex-center">
                        <span className="text-xs text-white dark:opacity-80">
                            {noCheck}
                        </span>
                    </div>
                }
                {isMarkOne &&
                    <svg className="mb-[7px]" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5.586L8.596 0.989502L9.3035 1.6965L4 7L0.818001 3.818L1.525 3.111L4 5.586Z" fill="#27AE60" />
                    </svg>
                }
                {isMarkTwo &&
                    <svg className="mb-[7px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.801 4.88L6.507 5.586L10.74 1.353L11.447 2.06L6.507 7L3.325 3.818L4.032 3.111L5.0945 4.1735L5.801 4.8795V4.88ZM5.802 3.466L8.278 0.989502L8.983 1.6945L6.507 4.171L5.802 3.466ZM4.3885 6.2935L3.682 7L0.5 3.818L1.207 3.111L1.9135 3.8175L1.913 3.818L4.3885 6.2935Z" fill="#27AE60" />
                    </svg>
                }
            </div>
        </div >
    )
}

export default ItemMessage