
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-scissors` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-scissors?s=light hand-scissors}
 * @preview ![hand-scissors](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgNDgwSDI3MC45ODRDMjM3LjM0MyA0ODAgMjA5Ljk4MyA0NTIuOTM4IDIwOS45ODMgNDE5LjY4OFY0MTIuMzZDMTkxLjY1NSA0MDEuNjU3IDE3OS45ODMgMzgyLjExIDE3OS45ODMgMzYwLjYyNlYzNDUuODQ1QzE3OS45ODMgMzQwLjkyMyAxODAuNjA4IDMzNi4wNjQgMTgxLjgxMSAzMzEuMzQ1TDY1LjI5NSAzMzkuNTMzQzYzLjk0NyAzMzkuNjE5IDYyLjYwNSAzMzkuNjYyIDYxLjI3MSAzMzkuNjYyQzM4LjE0IDMzOS42NjEgMCAzMjEuOTc4IDAgMjc5LjU5MkMwIDI0OC4xMjggMjQuNjMgMjIxLjUgNTYuNjU1IDIxOS4yNTNMMTU2LjI4IDIxMi4yMzdMNjkuOTY3IDE4MC45NDFDNTguMjAyIDE3Ni42ODUgMjkuOTMyIDE2MC4zMyAyOS45MzIgMTI0LjM4NkMyOS45MzIgOTEuMjg5IDU3LjEzMyA2NCA5MC45OSA2NEM5Ny45NzUgNjQgMTA1LjA3NyA2NS4xOTcgMTEyLjAxNCA2Ny43MjNMMjYxLjM0MyAxMjIuNzM4QzI2Mi43MTQgMTE5LjM4OCAyODMuMTc3IDk1LjAzNiAyODUuNTYyIDkyLjA5OEMzMDAuMDQ2IDc0LjI1NCAzMjEuNjU2IDY0LjAyIDM0NC44MjggNjQuMDJIMzk1LjE1NkM0MjMgNjQuMDIgNDQ4LjU3OCA3OS4wMiA0NjEuOTA2IDEwMy4xNzZMNDk1LjQ2OSAxNjQuMDgxQzUwNi4yODEgMTgzLjY3NSA1MTIgMjA1Ljg0NyA1MTIgMjI4LjE3NVYzNDUuODQ1QzUxMiA0MTkuODEzIDQ1MC45ODQgNDgwIDM3NiA0ODBaTTIxMC43MDIgMjk3LjI4M0MyMTkuNjE5IDI5Ny4yODMgMjI2LjY5NyAzMDQuNTQ5IDIyNi42OTcgMzEzLjI4NkMyMjYuNjk3IDMyNi44NDkgMjExLjk4MyAzMjYuNTkzIDIxMS45ODMgMzQ1Ljg0NVYzNjAuNjI2QzIxMS45ODMgMzg5Ljg0NSAyNDIuMjU5IDM4MS44MSAyNDIuMjU5IDQwMi4yNzlDMjQyLjI1OSA0MDIuNjU5IDI0Mi4yNDUgNDAzLjA0IDI0Mi4yMTggNDAzLjQyM0wyNDEuOTgzIDQxOS42ODhDMjQxLjk4MyA0MzUuMjk3IDI1NC45OTkgNDQ4IDI3MC45ODQgNDQ4SDM3NkM0MzMuMzQzIDQ0OCA0ODAgNDAyLjE3MyA0ODAgMzQ1Ljg0NVYyMjguMTc1QzQ4MCAyMTEuMjM3IDQ3NS42NTYgMTk0LjQwOSA0NjcuNDM3IDE3OS41MzRMNDMzLjg3NSAxMTguNjI5QzQyNi4xODcgMTA0LjY5MSA0MTEuMzQzIDk2LjAyIDM5NS4xNTYgOTYuMDJIMzQ0LjgyOEMzMzEuMzQzIDk2LjAyIDMxOC43OTYgMTAxLjk0MSAzMTAuNDA2IDExMi4yN0wyOTIuNTQ2IDEzNC4yNTRMMzYzLjg5IDE2MC41MzVDMzcwLjM2MiAxNjIuOTI0IDM3NC4zNjIgMTY5LjA0IDM3NC4zNjIgMTc1LjU1M0MzNzQuMzYyIDE4NC4zMiAzNjcuMjY0IDE5MS41OCAzNTguNDA0IDE5MS41OEMzNTYuNTUzIDE5MS41OCAzNTQuNjY5IDE5MS4yNTQgMzUyLjgyOCAxOTAuNTY2TDEwMS4wMTQgOTcuNzdDOTcuNzEyIDk2LjU2NyA5NC4zMjEgOTUuOTk2IDkwLjk4MyA5NS45OTZDNzUuMDIzIDk1Ljk5NiA2MS45NTggMTA4LjY3OSA2MS45NTggMTI0LjM5MkM2MS45NTggMTMwLjE5IDY0LjY4OCAxNDUuMDIxIDgwLjg1OCAxNTAuODQ3TDIzOC4wNzcgMjA3Ljg2MkMyNDQuNDc3IDIxMC4xODMgMjQ4LjYyMyAyMTYuMjUyIDI0OC42MjMgMjIyLjlDMjQ4LjYyMyAyMzUuOTYyIDIzNi4zNzcgMjM4LjY4MiAyMzMuNzQ5IDIzOC44NjJMNTguOTA1IDI1MS4xNTlDNDMuOTM4IDI1Mi4yMjQgMzIgMjY1LjA3MyAzMiAyNzkuNjU5QzMyIDI5NC45MSA0NC45MjEgMzA3LjY3OCA2MS4yNDMgMzA3LjY3OEM2MS44MzUgMzA3LjY3OCA2Mi40MzEgMzA3LjY2MSA2My4wMyAzMDcuNjI3TDIwOS41NzcgMjk3LjMzQzIwOS45NTIgMjk3LjI5OSAyMTAuMzI3IDI5Ny4yODMgMjEwLjcwMiAyOTcuMjgzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandScissors(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M376 480H270.984C237.343 480 209.983 452.938 209.983 419.688V412.36C191.655 401.657 179.983 382.11 179.983 360.626V345.845C179.983 340.923 180.608 336.064 181.811 331.345L65.295 339.533C63.947 339.619 62.605 339.662 61.271 339.662C38.14 339.661 0 321.978 0 279.592C0 248.128 24.63 221.5 56.655 219.253L156.28 212.237L69.967 180.941C58.202 176.685 29.932 160.33 29.932 124.386C29.932 91.289 57.133 64 90.99 64C97.975 64 105.077 65.197 112.014 67.723L261.343 122.738C262.714 119.388 283.177 95.036 285.562 92.098C300.046 74.254 321.656 64.02 344.828 64.02H395.156C423 64.02 448.578 79.02 461.906 103.176L495.469 164.081C506.281 183.675 512 205.847 512 228.175V345.845C512 419.813 450.984 480 376 480ZM210.702 297.283C219.619 297.283 226.697 304.549 226.697 313.286C226.697 326.849 211.983 326.593 211.983 345.845V360.626C211.983 389.845 242.259 381.81 242.259 402.279C242.259 402.659 242.245 403.04 242.218 403.423L241.983 419.688C241.983 435.297 254.999 448 270.984 448H376C433.343 448 480 402.173 480 345.845V228.175C480 211.237 475.656 194.409 467.437 179.534L433.875 118.629C426.187 104.691 411.343 96.02 395.156 96.02H344.828C331.343 96.02 318.796 101.941 310.406 112.27L292.546 134.254L363.89 160.535C370.362 162.924 374.362 169.04 374.362 175.553C374.362 184.32 367.264 191.58 358.404 191.58C356.553 191.58 354.669 191.254 352.828 190.566L101.014 97.77C97.712 96.567 94.321 95.996 90.983 95.996C75.023 95.996 61.958 108.679 61.958 124.392C61.958 130.19 64.688 145.021 80.858 150.847L238.077 207.862C244.477 210.183 248.623 216.252 248.623 222.9C248.623 235.962 236.377 238.682 233.749 238.862L58.905 251.159C43.938 252.224 32 265.073 32 279.659C32 294.91 44.921 307.678 61.243 307.678C61.835 307.678 62.431 307.661 63.03 307.627L209.577 297.33C209.952 297.299 210.327 297.283 210.702 297.283Z" />
        </Icon>
    </>
}