
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-pickup` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=duotone truck-pickup}
 * @preview ![truck-pickup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAzMDRDMTI3LjM5OCAzMDQgODggMzQzLjM5OCA4OCAzOTJDODggNDQwLjYgMTI3LjM5OCA0ODAgMTc2IDQ4MFMyNjQgNDQwLjYgMjY0IDM5MkMyNjQgMzQzLjM5OCAyMjQuNjAyIDMwNCAxNzYgMzA0Wk00NjQgMzA0QzQxNS4zOTggMzA0IDM3NiAzNDMuMzk4IDM3NiAzOTJDMzc2IDQ0MC42IDQxNS4zOTggNDgwIDQ2NCA0ODBTNTUyIDQ0MC42IDU1MiAzOTJDNTUyIDM0My4zOTggNTEyLjYwMiAzMDQgNDY0IDMwNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjI0IDI4OEg2MDhWMjI0QzYwOCAyMDYuMzc1IDU5My42MjUgMTkyIDU3NiAxOTJINTI4TDQxOS4yNSA1NkM0MDcuMTI1IDQwLjg3NSAzODguNjI1IDMyIDM2OS4yNSAzMkgyNTZDMjM4LjM3NSAzMiAyMjQgNDYuMzc1IDIyNCA2NFYxOTJINjRDNDYuMzc1IDE5MiAzMiAyMDYuMzc1IDMyIDIyNFYyODhIMTZDNy4xMjUgMjg4IDAgMjk1LjEyNSAwIDMwNFYzMzZDMCAzNDQuODc1IDcuMTI1IDM1MiAxNiAzNTJINjMuMzQ4Qzc5Ljg3OSAzMDUuNDk4IDEyMy44MjggMjcyIDE3NiAyNzJTMjcyLjEyMSAzMDUuNDk4IDI4OC42NTIgMzUySDM1MS4zNDhDMzY3Ljg3OSAzMDUuNDk4IDQxMS44MjggMjcyIDQ2NCAyNzJTNTYwLjEyMSAzMDUuNDk4IDU3Ni42NTIgMzUySDYyNEM2MzIuODc1IDM1MiA2NDAgMzQ0Ljg3NSA2NDAgMzM2VjMwNEM2NDAgMjk1LjEyNSA2MzIuODc1IDI4OCA2MjQgMjg4Wk0yODggMTkyVjk2SDM2OS4yNUw0NDUuOTk5IDE5MkgyODhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TruckPickup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M176 304C127.398 304 88 343.398 88 392C88 440.6 127.398 480 176 480S264 440.6 264 392C264 343.398 224.602 304 176 304ZM464 304C415.398 304 376 343.398 376 392C376 440.6 415.398 480 464 480S552 440.6 552 392C552 343.398 512.602 304 464 304Z" />
            <path d="M624 288H608V224C608 206.375 593.625 192 576 192H528L419.25 56C407.125 40.875 388.625 32 369.25 32H256C238.375 32 224 46.375 224 64V192H64C46.375 192 32 206.375 32 224V288H16C7.125 288 0 295.125 0 304V336C0 344.875 7.125 352 16 352H63.348C79.879 305.498 123.828 272 176 272S272.121 305.498 288.652 352H351.348C367.879 305.498 411.828 272 464 272S560.121 305.498 576.652 352H624C632.875 352 640 344.875 640 336V304C640 295.125 632.875 288 624 288ZM288 192V96H369.25L445.999 192H288Z" />
        </Icon>
    </>
}