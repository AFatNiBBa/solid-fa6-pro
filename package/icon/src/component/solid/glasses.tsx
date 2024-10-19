
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `glasses` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glasses?s=solid glasses}
 * @preview ![glasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzQuMTI1IDI4MC4zNzFMNTI4Ljc1IDk4LjYxOEM1MjIuODc1IDc0Ljk5MyA1MDcuMTI1IDU0LjYxNyA0ODUuNzUgNDIuODY3QzQ2NC4yNSAzMS4xMTcgNDM4Ljc1IDI4Ljc0MiA0MTUuNSAzNi40OTJMNDAwLjI1IDQxLjYxN0MzOTEuODc1IDQ0LjM2NyAzODcuMzc1IDUzLjQ5MiAzOTAuMjUgNjEuODY4TDM5NS4yNSA3Ni45OTNDMzk4IDg1LjM2OCA0MDcuMTI1IDg5Ljg2OCA0MTUuNSA4Ny4xMThMNDI4LjYyNSA4Mi43NDNDNDM5LjUgNzkuMTE4IDQ1MS42MjUgNzkuMTE4IDQ2MS44NzUgODQuNDkzUzQ3OS4zNzUgOTguOTkzIDQ4Mi4yNSAxMTAuMjQzTDUyMC42MjUgMjY0LjEyMUM0OTguNSAyNTcuMjQ2IDQ3MC44NzUgMjUxLjYyMSA0MzkuNSAyNTEuNjIxQzQwNC42MjUgMjUxLjYyMSAzNjUuNSAyNTguNjIxIDMyNC42MjUgMjc4LjM3MUgyNTEuMzc1QzIxMC41IDI1OC42MjEgMTcxLjM3NSAyNTEuNjIxIDEzNi41IDI1MS42MjFDMTA1LjEyNSAyNTEuNjIxIDc3LjUgMjU3LjI0NiA1NS4zNzUgMjY0LjEyMUw5My43NSAxMTAuMjQzQzk2LjYyNSA5OC45OTMgMTAzLjg3NSA4OS44NjggMTE0LjI1IDg0LjQ5M0MxMjQuMzc1IDc5LjExOCAxMzYuNSA3OS4xMTggMTQ3LjM3NSA4Mi43NDNMMTYwLjUgODcuMTE4QzE2OC44NzUgODkuODY4IDE3OCA4NS4zNjggMTgwLjc1IDc2Ljk5M0wxODUuNzUgNjEuODY4QzE4OC42MjUgNTMuNDkyIDE4NC4xMjUgNDQuMzY3IDE3NS42MjUgNDEuNjE3TDE2MC4zNzUgMzYuNDkyQzEzNy4yNSAyOC43NDIgMTExLjYyNSAzMS4xMTcgOTAuMjUgNDIuODY3QzY4Ljg3NSA1NC42MTcgNTMuMTI1IDc0Ljk5MyA0Ny4yNSA5OC42MThMMS44NzUgMjgwLjM3MUMwLjYyNSAyODUuMzcyIDAgMjkwLjYyMiAwIDI5NS44NzJWMzY2LjEyM0MwIDQyOC45OTkgNTEuNjI1IDQ4MCAxMTUuMjUgNDgwSDE1Mi4zNzVDMjEyLjYyNSA0ODAgMjYyLjc1IDQzMy45OTkgMjY3LjI1IDM3NC42MjNMMjcwLjEyNSAzMzUuOTk3SDMwNS44NzVMMzA4Ljc1IDM3NC42MjNDMzEzLjI1IDQzMy45OTkgMzYzLjM3NSA0ODAgNDIzLjYyNSA0ODBINDYwLjc1QzUyNC4zNzUgNDgwIDU3NiA0MjguOTk5IDU3NiAzNjYuMTIzVjI5NS44NzJDNTc2IDI5MC42MjIgNTc1LjM3NSAyODUuNDk3IDU3NC4xMjUgMjgwLjM3MVpNMjAzLjM3NSAzNjkuNzQ4QzIwMS4zNzUgMzk1Ljc0OSAxNzkgNDE1Ljk5OSAxNTIuMzc1IDQxNS45OTlIMTE1LjI1Qzg3IDQxNS45OTkgNjQgMzkzLjYyMyA2NCAzNjYuMTIzVjMyOC42MjJDODIuMTI1IDMyMi4xMjIgMTA3LjM3NSAzMTUuNjIyIDEzNi42MjUgMzE1LjYyMkMxNjAuNSAzMTUuNjIyIDE4My44NzUgMzE5Ljk5NyAyMDYuNSAzMjguNjIyTDIwMy4zNzUgMzY5Ljc0OFpNNTEyIDM2Ni4xMjNDNTEyIDM5My42MjMgNDg5IDQxNS45OTkgNDYwLjc1IDQxNS45OTlINDIzLjYyNUMzOTcgNDE1Ljk5OSAzNzQuNjI1IDM5NS43NDkgMzcyLjYyNSAzNjkuNzQ4TDM2OS41IDMyOC42MjJDMzkyLjEyNSAzMTkuOTk3IDQxNS42MjUgMzE1LjYyMiA0MzkuNSAzMTUuNjIyQzQ2OC41IDMxNS42MjIgNDkzLjg3NSAzMjIuMTIyIDUxMiAzMjguNjIyVjM2Ni4xMjNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Glasses(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M574.125 280.371L528.75 98.618C522.875 74.993 507.125 54.617 485.75 42.867C464.25 31.117 438.75 28.742 415.5 36.492L400.25 41.617C391.875 44.367 387.375 53.492 390.25 61.868L395.25 76.993C398 85.368 407.125 89.868 415.5 87.118L428.625 82.743C439.5 79.118 451.625 79.118 461.875 84.493S479.375 98.993 482.25 110.243L520.625 264.121C498.5 257.246 470.875 251.621 439.5 251.621C404.625 251.621 365.5 258.621 324.625 278.371H251.375C210.5 258.621 171.375 251.621 136.5 251.621C105.125 251.621 77.5 257.246 55.375 264.121L93.75 110.243C96.625 98.993 103.875 89.868 114.25 84.493C124.375 79.118 136.5 79.118 147.375 82.743L160.5 87.118C168.875 89.868 178 85.368 180.75 76.993L185.75 61.868C188.625 53.492 184.125 44.367 175.625 41.617L160.375 36.492C137.25 28.742 111.625 31.117 90.25 42.867C68.875 54.617 53.125 74.993 47.25 98.618L1.875 280.371C0.625 285.372 0 290.622 0 295.872V366.123C0 428.999 51.625 480 115.25 480H152.375C212.625 480 262.75 433.999 267.25 374.623L270.125 335.997H305.875L308.75 374.623C313.25 433.999 363.375 480 423.625 480H460.75C524.375 480 576 428.999 576 366.123V295.872C576 290.622 575.375 285.497 574.125 280.371ZM203.375 369.748C201.375 395.749 179 415.999 152.375 415.999H115.25C87 415.999 64 393.623 64 366.123V328.622C82.125 322.122 107.375 315.622 136.625 315.622C160.5 315.622 183.875 319.997 206.5 328.622L203.375 369.748ZM512 366.123C512 393.623 489 415.999 460.75 415.999H423.625C397 415.999 374.625 395.749 372.625 369.748L369.5 328.622C392.125 319.997 415.625 315.622 439.5 315.622C468.5 315.622 493.875 322.122 512 328.622V366.123Z" />
        </Icon>
    </>
}