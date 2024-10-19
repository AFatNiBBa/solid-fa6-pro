
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users-medical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users-medical?s=duotone users-medical}
 * @preview ![users-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAxNjBDMTcyLjE4NCAxNjAgMjA4IDEyNC4xODIgMjA4IDgwUzE3Mi4xODQgMCAxMjggMEM4My44MiAwIDQ4IDM1LjgxOCA0OCA4MFM4My44MiAxNjAgMTI4IDE2MFpNMzE5Ljg1OSAzMjBDMzc3LjI3MyAzMjAgNDIzLjgxNCAyNzMuNDM2IDQyMy44MTQgMjE2QzQyMy44MTQgMTU4LjU2MiAzNzcuMjczIDExMiAzMTkuODU5IDExMkMyNjIuNDUxIDExMiAyMTUuOTA0IDE1OC41NjIgMjE1LjkwNCAyMTZDMjE1LjkwNCAyNzMuNDM2IDI2Mi40NTEgMzIwIDMxOS44NTkgMzIwWk01MTIgMTYwQzU1Ni4xODQgMTYwIDU5MiAxMjQuMTgyIDU5MiA4MFM1NTYuMTg0IDAgNTEyIDBDNDY3LjgyIDAgNDMyIDM1LjgxOCA0MzIgODBTNDY3LjgyIDE2MCA1MTIgMTYwWk00NzYgNDg0SDQ2MEM0MzUuNzM4IDQ4NCA0MTYgNDY0LjI2MiA0MTYgNDQwVjM5MkM0MTYgMzgxLjAwNCA0MjAuMTk5IDM3MS4wNTkgNDI2Ljg5MyAzNjMuMzM4QzQwOS40MiAzNTYuMTM5IDM5MC4xOTUgMzUyIDM2OS44ODcgMzUySDI3MC4xMTNDMTkxLjYzMSAzNTIgMTI4IDQxMS42OTMgMTI4IDQ4NS4zMzJDMTI4IDUwMC4wNTkgMTQwLjcyNyA1MTIgMTU2LjQyMiA1MTJINDc3Ljg3M0M0NzYuNzc1IDUwOC4xNiA0NzYgNTA0LjE4OCA0NzYgNTAwVjQ4NFpNNTUxLjkyIDE5Mkg0OTAuMDhDNDc3LjI3OSAxOTIgNDY1LjE5NSAxOTUuMDM3IDQ1NC4yMjEgMjAwLjI0QzQ1NC44MzQgMjA1LjQ3NSA0NTUuODE0IDIxMC42MDQgNDU1LjgxNCAyMTZDNDU1LjgxNCAyNDkuNzE1IDQ0My4wMzMgMjgwLjIxMSA0MjIuNjUgMzA0SDQ4Ni4zNDZDNDk0LjQyNCAyOTQuMzA5IDUwNi40MjggMjg4IDUyMCAyODhINTY4QzU4MS41NzIgMjg4IDU5My41NzYgMjk0LjMwOSA2MDEuNjU0IDMwNEg2MjIuMzg1QzYzMi4xMTMgMzA0IDY0MCAyOTUuNjQxIDY0MCAyODUuMzMyQzY0MCAyMzMuNzg1IDYwMC41NjYgMTkyIDU1MS45MiAxOTJaTTE4My45MDYgMjE2QzE4My45MDYgMjEwLjU1MSAxODQuODg5IDIwNS4zNzEgMTg1LjUxNiAyMDAuMDg4QzE3NC42MTMgMTk0Ljk2NyAxNjIuNjEzIDE5MiAxNDkuOTIgMTkySDg4LjA4QzM5LjQzOCAxOTIgMCAyMzMuNzg1IDAgMjg1LjMzMkMwIDI5NS42NDEgNy44ODcgMzA0IDE3LjYxNSAzMDRIMjE3LjA3QzE5Ni42ODggMjgwLjIxMSAxODMuOTA2IDI0OS43MTUgMTgzLjkwNiAyMTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYyOCAzODBINTgwVjMzMkM1ODAgMzI1LjM3MyA1NzQuNjI3IDMyMCA1NjggMzIwSDUyMEM1MTMuMzczIDMyMCA1MDggMzI1LjM3MyA1MDggMzMyVjM4MEg0NjBDNDUzLjM3MyAzODAgNDQ4IDM4NS4zNzMgNDQ4IDM5MlY0NDBDNDQ4IDQ0Ni42MjcgNDUzLjM3MyA0NTIgNDYwIDQ1Mkg1MDhWNTAwQzUwOCA1MDYuNjI3IDUxMy4zNzMgNTEyIDUyMCA1MTJINTY4QzU3NC42MjcgNTEyIDU4MCA1MDYuNjI3IDU4MCA1MDBWNDUySDYyOEM2MzQuNjI3IDQ1MiA2NDAgNDQ2LjYyNyA2NDAgNDQwVjM5MkM2NDAgMzg1LjM3MyA2MzQuNjI3IDM4MCA2MjggMzgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UsersMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM476 484H460C435.738 484 416 464.262 416 440V392C416 381.004 420.199 371.059 426.893 363.338C409.42 356.139 390.195 352 369.887 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H477.873C476.775 508.16 476 504.188 476 500V484ZM551.92 192H490.08C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 249.715 443.033 280.211 422.65 304H486.346C494.424 294.309 506.428 288 520 288H568C581.572 288 593.576 294.309 601.654 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192ZM183.906 216C183.906 210.551 184.889 205.371 185.516 200.088C174.613 194.967 162.613 192 149.92 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C196.688 280.211 183.906 249.715 183.906 216Z" />
            <path d="M628 380H580V332C580 325.373 574.627 320 568 320H520C513.373 320 508 325.373 508 332V380H460C453.373 380 448 385.373 448 392V440C448 446.627 453.373 452 460 452H508V500C508 506.627 513.373 512 520 512H568C574.627 512 580 506.627 580 500V452H628C634.627 452 640 446.627 640 440V392C640 385.373 634.627 380 628 380Z" />
        </Icon>
    </>
}