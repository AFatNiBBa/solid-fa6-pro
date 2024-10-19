
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users-gear` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users-gear?s=duotone users-gear}
 * @preview ![users-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4My45MDYgMjE2QzE4My45MDYgMjEwLjU1MSAxODQuODg5IDIwNS4zNzEgMTg1LjUxNiAyMDAuMDg4QzE3NC42MTMgMTk0Ljk2NyAxNjIuNjEzIDE5MiAxNDkuOTIgMTkySDg4LjA4QzM5LjQzOCAxOTIgMCAyMzMuNzg1IDAgMjg1LjMzMkMwIDI5NS42NDEgNy44ODcgMzA0IDE3LjYxNSAzMDRIMjE3LjA3QzE5Ni42ODggMjgwLjIxMSAxODMuOTA2IDI0OS43MTUgMTgzLjkwNiAyMTZaTTEyOCAxNjBDMTcyLjE4NCAxNjAgMjA4IDEyNC4xODIgMjA4IDgwUzE3Mi4xODQgMCAxMjggMEM4My44MiAwIDQ4IDM1LjgxOCA0OCA4MFM4My44MiAxNjAgMTI4IDE2MFpNMzY4IDQwMEMzNjggMzgzLjMxMiAzNzEuMzk4IDM2Ny41NDEgMzc2LjYxOSAzNTIuNjM3QzM3NC4zNCAzNTIuNTM1IDM3Mi4xOTMgMzUyIDM2OS44ODcgMzUySDI3MC4xMTNDMTkxLjYzMSAzNTIgMTI4IDQxMS42OTMgMTI4IDQ4NS4zMzJDMTI4IDUwMC4wNTkgMTQwLjcyNyA1MTIgMTU2LjQyMiA1MTJINDIyLjUxQzM4OS41MzUgNDg1LjYxMSAzNjggNDQ1LjUxOCAzNjggNDAwWk01NTEuOTIgMTkySDQ5MC4wOEM0NzcuMjc5IDE5MiA0NjUuMTk1IDE5NS4wMzcgNDU0LjIyMSAyMDAuMjRDNDU0LjgzNCAyMDUuNDc1IDQ1NS44MTQgMjEwLjYwNCA0NTUuODE0IDIxNkM0NTUuODE0IDIzNy40NzEgNDUwLjE4OSAyNTcuMzg1IDQ0MS4xNiAyNzUuMzQ0QzQ2Mi4xNTYgMjYzLjM4MSA0ODYuMTA3IDI1NiA1MTIgMjU2QzU1NC40OCAyNTYgNTkyLjI3MSAyNzQuNzQgNjE4LjYyOSAzMDRINjIyLjM4NUM2MzIuMTEzIDMwNCA2NDAgMjk1LjY0MSA2NDAgMjg1LjMzMkM2NDAgMjMzLjc4NSA2MDAuNTY2IDE5MiA1NTEuOTIgMTkyWk01MTIgMTYwQzU1Ni4xODQgMTYwIDU5MiAxMjQuMTgyIDU5MiA4MFM1NTYuMTg0IDAgNTEyIDBDNDY3LjgyIDAgNDMyIDM1LjgxOCA0MzIgODBTNDY3LjgyIDE2MCA1MTIgMTYwWk0zMTkuODU5IDExMkMyNjIuNDUxIDExMiAyMTUuOTA0IDE1OC41NjIgMjE1LjkwNCAyMTZDMjE1LjkwNCAyNzMuNDM2IDI2Mi40NTEgMzIwIDMxOS44NTkgMzIwQzM3Ny4yNzMgMzIwIDQyMy44MTQgMjczLjQzNiA0MjMuODE0IDIxNkM0MjMuODE0IDE1OC41NjIgMzc3LjI3MyAxMTIgMzE5Ljg1OSAxMTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU5Ny40OTggNDE1LjgxOEM1OTkuNDUyIDQwNS4zOTYgNTk5LjQ1MiAzOTQuNjAyIDU5Ny40OTggMzg0LjE4Mkw2MTYuNjY2IDM3My4wMTRDNjE4LjkwMSAzNzEuODA1IDYxOS45MjIgMzY5LjE5OSA2MTkuMTc4IDM2Ni42ODdDNjE0LjE1MyAzNTAuNjgyIDYwNS41OTIgMzM2LjA3MiA1OTQuNDI2IDMyMy45NzdDNTkyLjc1MiAzMjIuMTE1IDU4OS45NTkgMzIxLjY1IDU4Ny43MjcgMzIyLjk1M0w1NjguNTU5IDMzNC4wMjVDNTYwLjQ2MyAzMjcuMTM5IDU1MS4xNTcgMzIxLjc0NCA1NDEuMTA4IDMxOC4yMDdWMjk1Ljk2OUM1NDEuMTA4IDI5My40NTUgNTM5LjI0NiAyOTEuMjIzIDUzNi44MjcgMjkwLjc1NkM1MjAuMjY2IDI4Ny4wMzMgNTAzLjMyOSAyODcuMTI3IDQ4Ny41MSAyOTAuNzU2QzQ4NS4wOTIgMjkxLjIyMyA0ODMuMzIzIDI5My40NTUgNDgzLjMyMyAyOTUuOTY5VjMxOC4yMDdDNDczLjI3NCAzMjEuNzQ0IDQ2My45NjcgMzI3LjEzOSA0NTUuODczIDMzNC4wMjVMNDM2LjYxIDMyMi45NTNDNDM0LjQ3MSAzMjEuNjUgNDMxLjY3OCAzMjIuMTE1IDQyOS45MTIgMzIzLjk3N0M0MTguNzQ1IDMzNi4wNzIgNDEwLjE4NCAzNTAuNjgyIDQwNS4yNTIgMzY2LjY4N0M0MDQuNTA4IDM2OS4xOTkgNDA1LjUzMiAzNzEuODA1IDQwNy42NzIgMzczLjAxNEw0MjYuODQgMzg0LjE4MkM0MjQuOTgxIDM5NC42MDIgNDI0Ljk4MSA0MDUuMzk2IDQyNi44NCA0MTUuODE4TDQwNy42NzIgNDI2Ljk4NEM0MDUuNDM4IDQyOC4xOTMgNDA0LjUwOCA0MzAuODAxIDQwNS4yNTIgNDMzLjMxMkM0MTAuMTg0IDQ0OS4zMTggNDE4Ljc0NSA0NjMuODMyIDQyOS45MTIgNDc2LjAyMUM0MzEuNjc4IDQ3Ny44ODUgNDM0LjM3OSA0NzguMzUgNDM2LjYxIDQ3Ny4wNDdMNDU1Ljg3MyA0NjUuOTczQzQ2My45NjcgNDcyLjg1OSA0NzMuMjc0IDQ3OC4yNTYgNDgzLjMyMyA0ODEuNzkxVjUwNC4wMzFDNDgzLjMyMyA1MDYuNTQ1IDQ4NS4wOTIgNTA4Ljc3NyA0ODcuNTEgNTA5LjI0MkM1MDQuMTY2IDUxMi45NjUgNTIxLjAxIDUxMi44NzEgNTM2LjgyNyA1MDkuMjQyQzUzOS4yNDYgNTA4Ljc3NyA1NDEuMTA4IDUwNi41NDUgNTQxLjEwOCA1MDQuMDMxVjQ4MS43OTFDNTUxLjE1NyA0NzguMjU2IDU2MC40NjMgNDcyLjg1OSA1NjguNTU5IDQ2NS45NzNMNTg3LjcyNyA0NzcuMDQ3QzU4OS44NjggNDc4LjM1IDU5Mi43NTIgNDc3Ljg4NSA1OTQuNDI2IDQ3Ni4wMjFDNjA1LjU5MiA0NjMuOTI2IDYxNC4xNTMgNDQ5LjMxOCA2MTkuMTc4IDQzMy4zMTJDNjE5LjkyMiA0MzAuODAxIDYxOC45MDEgNDI4LjE5MyA2MTYuNjY2IDQyNi45ODRMNTk3LjQ5OCA0MTUuODE4Wk01MTIuMjA5IDQzMkM0OTQuNTM2IDQzMiA0ODAuMjA5IDQxNy42NzIgNDgwLjIwOSA0MDBDNDgwLjIwOSAzODIuMzI2IDQ5NC41MzYgMzY4IDUxMi4yMDkgMzY4UzU0NC4yMDkgMzgyLjMyNiA1NDQuMjA5IDQwMEM1NDQuMjA5IDQxNy42NzIgNTI5Ljg4MyA0MzIgNTEyLjIwOSA0MzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UsersGear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M183.906 216C183.906 210.551 184.889 205.371 185.516 200.088C174.613 194.967 162.613 192 149.92 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C196.688 280.211 183.906 249.715 183.906 216ZM128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM368 400C368 383.312 371.398 367.541 376.619 352.637C374.34 352.535 372.193 352 369.887 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H422.51C389.535 485.611 368 445.518 368 400ZM551.92 192H490.08C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 237.471 450.189 257.385 441.16 275.344C462.156 263.381 486.107 256 512 256C554.48 256 592.271 274.74 618.629 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112Z" />
            <path d="M597.498 415.818C599.452 405.396 599.452 394.602 597.498 384.182L616.666 373.014C618.901 371.805 619.922 369.199 619.178 366.687C614.153 350.682 605.592 336.072 594.426 323.977C592.752 322.115 589.959 321.65 587.727 322.953L568.559 334.025C560.463 327.139 551.157 321.744 541.108 318.207V295.969C541.108 293.455 539.246 291.223 536.827 290.756C520.266 287.033 503.329 287.127 487.51 290.756C485.092 291.223 483.323 293.455 483.323 295.969V318.207C473.274 321.744 463.967 327.139 455.873 334.025L436.61 322.953C434.471 321.65 431.678 322.115 429.912 323.977C418.745 336.072 410.184 350.682 405.252 366.687C404.508 369.199 405.532 371.805 407.672 373.014L426.84 384.182C424.981 394.602 424.981 405.396 426.84 415.818L407.672 426.984C405.438 428.193 404.508 430.801 405.252 433.312C410.184 449.318 418.745 463.832 429.912 476.021C431.678 477.885 434.379 478.35 436.61 477.047L455.873 465.973C463.967 472.859 473.274 478.256 483.323 481.791V504.031C483.323 506.545 485.092 508.777 487.51 509.242C504.166 512.965 521.01 512.871 536.827 509.242C539.246 508.777 541.108 506.545 541.108 504.031V481.791C551.157 478.256 560.463 472.859 568.559 465.973L587.727 477.047C589.868 478.35 592.752 477.885 594.426 476.021C605.592 463.926 614.153 449.318 619.178 433.312C619.922 430.801 618.901 428.193 616.666 426.984L597.498 415.818ZM512.209 432C494.536 432 480.209 417.672 480.209 400C480.209 382.326 494.536 368 512.209 368S544.209 382.326 544.209 400C544.209 417.672 529.883 432 512.209 432Z" />
        </Icon>
    </>
}