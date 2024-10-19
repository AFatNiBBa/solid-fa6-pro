
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-long` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=light down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzYuMDAxIDBIMTgzLjk5OUMyMDYuMDYgMCAyMjMuOTk3IDE3Ljk2OSAyMjMuOTk3IDQwLjAzMUwyMjMuOTk3IDMyMC40ODRIMjYzLjk5NkMyNzkuOTAxIDMyMC40ODQgMjk0LjMwNyAzMjkuOTIyIDMwMC42NTEgMzQ0LjQ4NEMzMDcuMDI1IDM1OS4xMDkgMzA0LjE1IDM3Ni4wNDcgMjkzLjMwNyAzODcuNzAzTDE4OS4zMTEgNDk5Ljc2NkMxODEuNzc5IDUwNy45MjQgMTcwLjg5MyA1MTIuMDAyIDE2MCA1MTJDMTQ5LjExMiA1MTEuOTk4IDEzOC4yMTggNTA3LjkyIDEzMC42NTcgNDk5Ljc2NkwyNi42OTMgMzg3LjcwM0MxNS44NSAzNzYuMDQ3IDEyLjk3NSAzNTkuMTA5IDE5LjM0OSAzNDQuNDg0QzI1LjY5MyAzMjkuOTIyIDQwLjA5OSAzMjAuNDg0IDU2LjAwNCAzMjAuNDg0SDk2LjAwM0w5Ni4wMDIgNDAuMDMxQzk2LjAwMiAxNy45NjkgMTEzLjkzOSAwIDEzNi4wMDEgMFpNMTYwIDQ4MC41NzhDMTYxLjMxMiA0ODAuNTc4IDE2My43ODEgNDgwLjIzNCAxNjUuODQ0IDQ3OC4wMTZMMjY5Ljg3MSAzNjUuOTUzQzI3NC41NzEgMzYwLjg0NCAyNzEuMDEzIDM1Mi40ODQgMjYzLjk5NiAzNTIuNDg0SDE5MS45OTlMMTkxLjk5OSA0MC4wMzFDMTkxLjk5OSAzNS41OTQgMTg4LjQwNSAzMiAxODMuOTk5IDMySDEzNi4wMDFDMTMxLjU5NSAzMiAxMjguMDAxIDM1LjU5NCAxMjguMDAxIDQwLjAzMUwxMjguMDAxIDM1Mi40ODRINTYuMDA0QzQ4Ljk4MiAzNTIuNDg0IDQ1LjQzMyAzNjAuODQ4IDUwLjEyOSAzNjUuOTUzTDE1NC4xMjUgNDc4LjAxNkMxNTYuMjE5IDQ4MC4yMzQgMTU4LjY4OCA0ODAuNTc4IDE2MCA0ODAuNTc4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M136.001 0H183.999C206.06 0 223.997 17.969 223.997 40.031L223.997 320.484H263.996C279.901 320.484 294.307 329.922 300.651 344.484C307.025 359.109 304.15 376.047 293.307 387.703L189.311 499.766C181.779 507.924 170.893 512.002 160 512C149.112 511.998 138.218 507.92 130.657 499.766L26.693 387.703C15.85 376.047 12.975 359.109 19.349 344.484C25.693 329.922 40.099 320.484 56.004 320.484H96.003L96.002 40.031C96.002 17.969 113.939 0 136.001 0ZM160 480.578C161.312 480.578 163.781 480.234 165.844 478.016L269.871 365.953C274.571 360.844 271.013 352.484 263.996 352.484H191.999L191.999 40.031C191.999 35.594 188.405 32 183.999 32H136.001C131.595 32 128.001 35.594 128.001 40.031L128.001 352.484H56.004C48.982 352.484 45.433 360.848 50.129 365.953L154.125 478.016C156.219 480.234 158.688 480.578 160 480.578Z" />
        </Icon>
    </>
}