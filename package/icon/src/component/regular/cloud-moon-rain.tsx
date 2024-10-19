
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-moon-rain` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-moon-rain?s=regular cloud-moon-rain}
 * @preview ![cloud-moon-rain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDguMDMxIDQyNi42ODhMMTE2LjAzMSA0NzQuNjg4QzEwOC42ODggNDg1LjcxOSAxMTEuNjU2IDUwMC42MjUgMTIyLjY4OCA1MDcuOTY5QzEyNi43ODEgNTEwLjY4OCAxMzEuNDA2IDUxMiAxMzUuOTY5IDUxMkMxNDMuNzE5IDUxMiAxNTEuMzQ0IDUwOC4yNSAxNTUuOTY5IDUwMS4zMTJMMTg3Ljk2OSA0NTMuMzEyQzE5NS4zMTIgNDQyLjI4MSAxOTIuMzQ0IDQyNy4zNzUgMTgxLjMxMiA0MjAuMDMxQzE3MC4yODEgNDEyLjcxOSAxNTUuMzc1IDQxNS42NTYgMTQ4LjAzMSA0MjYuNjg4Wk0yNDQuMDMxIDQyNi42ODhMMjEyLjAzMSA0NzQuNjg4QzIwNC42ODggNDg1LjcxOSAyMDcuNjU2IDUwMC42MjUgMjE4LjY4OCA1MDcuOTY5QzIyMi43ODEgNTEwLjY4OCAyMjcuNDA2IDUxMiAyMzEuOTY5IDUxMkMyMzkuNzE5IDUxMiAyNDcuMzQ0IDUwOC4yNSAyNTEuOTY5IDUwMS4zMTJMMjgzLjk2OSA0NTMuMzEyQzI5MS4zMTIgNDQyLjI4MSAyODguMzQ0IDQyNy4zNzUgMjc3LjMxMiA0MjAuMDMxQzI2Ni4yNSA0MTIuNzE5IDI1MS4zNzUgNDE1LjY1NiAyNDQuMDMxIDQyNi42ODhaTTM0MC4wMzEgNDI2LjY4OEwzMDguMDMxIDQ3NC42ODhDMzAwLjY4OCA0ODUuNzE5IDMwMy42NTYgNTAwLjYyNSAzMTQuNjg4IDUwNy45NjlDMzE4Ljc4MSA1MTAuNjg4IDMyMy40MDYgNTEyIDMyNy45NjkgNTEyQzMzNS43MTkgNTEyIDM0My4zNDQgNTA4LjI1IDM0Ny45NjkgNTAxLjMxMkwzNzkuOTY5IDQ1My4zMTJDMzg3LjMxMiA0NDIuMjgxIDM4NC4zNDQgNDI3LjM3NSAzNzMuMzEyIDQyMC4wMzFDMzYyLjI1IDQxMi43MTkgMzQ3LjM3NSA0MTUuNjU2IDM0MC4wMzEgNDI2LjY4OFpNMzYzLjM3NSAxODMuMzc1QzM1MS4zNzUgMTQ2LjYyNSAzMTYuNzUgMTIwIDI3NiAxMjBDMjcyLjg3NSAxMjAgMjY5Ljg3NSAxMjAuMjUgMjY2Ljg3NSAxMjAuNUMyNDUuMjUgMTA0Ljc1IDIxOS4yNSA5NiAxOTIgOTZDMTM5LjYyNSA5NiA5NC4zNzUgMTI3LjI1IDc0Ljc1IDE3My4yNUMzMS4zNzUgMTg3LjI1IDAgMjI4IDAgMjc2QzAgMzM1LjYyNSA0OC4zNzUgMzg0IDEwOCAzODRIMzA4QzM2Ny42MjUgMzg0IDQxNiAzMzUuNjI1IDQxNiAyNzZDNDE2IDIzNy4yNSAzOTUuMjUgMjAyLjM3NSAzNjMuMzc1IDE4My4zNzVaTTMwOCAzMzZIMTA4Qzc0Ljg3NSAzMzYgNDggMzA5LjEyNSA0OCAyNzZTNzQuODc1IDIxNiAxMDggMjE2QzEwOS42MjUgMjE2IDExMS4yNSAyMTYuMzc1IDExMi43NSAyMTYuNUMxMTYuNjI1IDE3NS44NzUgMTUwLjM3NSAxNDQgMTkyIDE0NEMyMTcuMjUgMTQ0IDIzOS4zNzUgMTU1Ljg3NSAyNTQuMTI1IDE3NC4xMjVDMjYwLjYyNSAxNzAuMjUgMjY4IDE2OCAyNzYgMTY4QzMwMC4yNSAxNjggMzIwIDE4Ny43NSAzMjAgMjEyQzMyMCAyMTMuNzUgMzE5Ljc1IDIxNS4zNzUgMzE5LjUgMjE3LjI1QzM0Ny4xMjUgMjIyLjYyNSAzNjggMjQ2Ljc1IDM2OCAyNzZDMzY4IDMwOS4xMjUgMzQxLjEyNSAzMzYgMzA4IDMzNlpNNTY3LjkzNiAyMjMuNzVDNDk3LjU2MSAyMzcuMTI1IDQzMi45MzQgMTgzLjUgNDMyLjkzNCAxMTNDNDMyLjkzNCA3Mi4zNzUgNDU0LjgwOSAzNSA0OTAuNDM2IDE0Ljg3NUM0OTUuOTM2IDExLjc1IDQ5NC41NjEgMy41IDQ4OC4zMTEgMi4zNzVDNDc5LjY4NCAwLjc1IDQ3MC44MDkgMCA0NjEuODA5IDBDMzk3Ljk4NiAwIDM0NC42NjQgNDEuNDE2IDMyNS40MjggOTguNDQxQzM1My42OTEgMTEwLjcyNSAzNzYuODg1IDEzMy4xNjIgMzg5LjU2MiAxNjIuMzEyQzQyNS44NzUgMTg4LjM3NSA0NDggMjMwLjkzOCA0NDggMjc2QzQ0OCAyNzkuNTQxIDQ0Ny41OSAyODIuOTc3IDQ0Ny4zMyAyODYuNDUxQzQ1Mi4xNzQgMjg2Ljk3MSA0NTYuODI0IDI4Ny44NzUgNDYxLjgwOSAyODcuODc1QzUwNi40MzYgMjg3Ljg3NSA1NDcuMzExIDI2Ny43NSA1NzQuMzExIDIzNC42MjVDNTc4LjU2MSAyMjkuNzUgNTc0LjE4NiAyMjIuNjI1IDU2Ny45MzYgMjIzLjc1Wk01Mi4wMzEgNDI2LjY4OEwyMC4wMzEgNDc0LjY4OEMxMi42ODggNDg1LjcxOSAxNS42NTYgNTAwLjYyNSAyNi42ODggNTA3Ljk2OUMzMC43ODEgNTEwLjY4OCAzNS40MDYgNTEyIDM5Ljk2OSA1MTJDNDcuNzE5IDUxMiA1NS4zNDQgNTA4LjI1IDU5Ljk2OSA1MDEuMzEyTDkxLjk2OSA0NTMuMzEyQzk5LjMxMiA0NDIuMjgxIDk2LjM0NCA0MjcuMzc1IDg1LjMxMiA0MjAuMDMxQzc0LjI1IDQxMi43MTkgNTkuNDA2IDQxNS42NTYgNTIuMDMxIDQyNi42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudMoonRain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M148.031 426.688L116.031 474.688C108.688 485.719 111.656 500.625 122.688 507.969C126.781 510.688 131.406 512 135.969 512C143.719 512 151.344 508.25 155.969 501.312L187.969 453.312C195.312 442.281 192.344 427.375 181.312 420.031C170.281 412.719 155.375 415.656 148.031 426.688ZM244.031 426.688L212.031 474.688C204.688 485.719 207.656 500.625 218.688 507.969C222.781 510.688 227.406 512 231.969 512C239.719 512 247.344 508.25 251.969 501.312L283.969 453.312C291.312 442.281 288.344 427.375 277.312 420.031C266.25 412.719 251.375 415.656 244.031 426.688ZM340.031 426.688L308.031 474.688C300.688 485.719 303.656 500.625 314.688 507.969C318.781 510.688 323.406 512 327.969 512C335.719 512 343.344 508.25 347.969 501.312L379.969 453.312C387.312 442.281 384.344 427.375 373.312 420.031C362.25 412.719 347.375 415.656 340.031 426.688ZM363.375 183.375C351.375 146.625 316.75 120 276 120C272.875 120 269.875 120.25 266.875 120.5C245.25 104.75 219.25 96 192 96C139.625 96 94.375 127.25 74.75 173.25C31.375 187.25 0 228 0 276C0 335.625 48.375 384 108 384H308C367.625 384 416 335.625 416 276C416 237.25 395.25 202.375 363.375 183.375ZM308 336H108C74.875 336 48 309.125 48 276S74.875 216 108 216C109.625 216 111.25 216.375 112.75 216.5C116.625 175.875 150.375 144 192 144C217.25 144 239.375 155.875 254.125 174.125C260.625 170.25 268 168 276 168C300.25 168 320 187.75 320 212C320 213.75 319.75 215.375 319.5 217.25C347.125 222.625 368 246.75 368 276C368 309.125 341.125 336 308 336ZM567.936 223.75C497.561 237.125 432.934 183.5 432.934 113C432.934 72.375 454.809 35 490.436 14.875C495.936 11.75 494.561 3.5 488.311 2.375C479.684 0.75 470.809 0 461.809 0C397.986 0 344.664 41.416 325.428 98.441C353.691 110.725 376.885 133.162 389.562 162.312C425.875 188.375 448 230.938 448 276C448 279.541 447.59 282.977 447.33 286.451C452.174 286.971 456.824 287.875 461.809 287.875C506.436 287.875 547.311 267.75 574.311 234.625C578.561 229.75 574.186 222.625 567.936 223.75ZM52.031 426.688L20.031 474.688C12.688 485.719 15.656 500.625 26.688 507.969C30.781 510.688 35.406 512 39.969 512C47.719 512 55.344 508.25 59.969 501.312L91.969 453.312C99.312 442.281 96.344 427.375 85.312 420.031C74.25 412.719 59.406 415.656 52.031 426.688Z" />
        </Icon>
    </>
}