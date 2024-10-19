
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `city` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/city?s=regular city}
 * @preview ![city](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDQgMzg0SDIwNEMxOTcuMzc1IDM4NCAxOTIgMzg5LjM3NSAxOTIgMzk2VjQzNkMxOTIgNDQyLjYyNSAxOTcuMzc1IDQ0OCAyMDQgNDQ4SDI0NEMyNTAuNjI1IDQ0OCAyNTYgNDQyLjYyNSAyNTYgNDM2VjM5NkMyNTYgMzg5LjM3NSAyNTAuNjI1IDM4NCAyNDQgMzg0Wk0yNDQgMTkySDIwNEMxOTcuMzc1IDE5MiAxOTIgMTk3LjM3NSAxOTIgMjA0VjI0NEMxOTIgMjUwLjYyNSAxOTcuMzc1IDI1NiAyMDQgMjU2SDI0NEMyNTAuNjI1IDI1NiAyNTYgMjUwLjYyNSAyNTYgMjQ0VjIwNEMyNTYgMTk3LjM3NSAyNTAuNjI1IDE5MiAyNDQgMTkyWk0xNDggMTkySDEwOEMxMDEuMzc1IDE5MiA5NiAxOTcuMzc1IDk2IDIwNFYyNDRDOTYgMjUwLjYyNSAxMDEuMzc1IDI1NiAxMDggMjU2SDE0OEMxNTQuNjI1IDI1NiAxNjAgMjUwLjYyNSAxNjAgMjQ0VjIwNEMxNjAgMTk3LjM3NSAxNTQuNjI1IDE5MiAxNDggMTkyWk0xNDggMzg0SDEwOEMxMDEuMzc1IDM4NCA5NiAzODkuMzc1IDk2IDM5NlY0MzZDOTYgNDQyLjYyNSAxMDEuMzc1IDQ0OCAxMDggNDQ4SDE0OEMxNTQuNjI1IDQ0OCAxNjAgNDQyLjYyNSAxNjAgNDM2VjM5NkMxNjAgMzg5LjM3NSAxNTQuNjI1IDM4NCAxNDggMzg0Wk0xNDggMjg4SDEwOEMxMDEuMzc1IDI4OCA5NiAyOTMuMzc1IDk2IDMwMFYzNDBDOTYgMzQ2LjYyNSAxMDEuMzc1IDM1MiAxMDggMzUySDE0OEMxNTQuNjI1IDM1MiAxNjAgMzQ2LjYyNSAxNjAgMzQwVjMwMEMxNjAgMjkzLjM3NSAxNTQuNjI1IDI4OCAxNDggMjg4Wk0yNDQgMjg4SDIwNEMxOTcuMzc1IDI4OCAxOTIgMjkzLjM3NSAxOTIgMzAwVjM0MEMxOTIgMzQ2LjYyNSAxOTcuMzc1IDM1MiAyMDQgMzUySDI0NEMyNTAuNjI1IDM1MiAyNTYgMzQ2LjYyNSAyNTYgMzQwVjMwMEMyNTYgMjkzLjM3NSAyNTAuNjI1IDI4OCAyNDQgMjg4Wk01MzIgMzg0SDQ5MkM0ODUuMzc1IDM4NCA0ODAgMzg5LjM3NSA0ODAgMzk2VjQzNkM0ODAgNDQyLjYyNSA0ODUuMzc1IDQ0OCA0OTIgNDQ4SDUzMkM1MzguNjI1IDQ0OCA1NDQgNDQyLjYyNSA1NDQgNDM2VjM5NkM1NDQgMzg5LjM3NSA1MzguNjI1IDM4NCA1MzIgMzg0Wk01MzIgMjg4SDQ5MkM0ODUuMzc1IDI4OCA0ODAgMjkzLjM3NSA0ODAgMzAwVjM0MEM0ODAgMzQ2LjYyNSA0ODUuMzc1IDM1MiA0OTIgMzUySDUzMkM1MzguNjI1IDM1MiA1NDQgMzQ2LjYyNSA1NDQgMzQwVjMwMEM1NDQgMjkzLjM3NSA1MzguNjI1IDI4OCA1MzIgMjg4Wk01NzYgMTkySDUxMlY2NEM1MTIgMjguNjU0IDQ4My4zNDYgMCA0NDggMEgzMjBDMjg0LjY1NCAwIDI1NiAyOC42NTQgMjU2IDY0Vjk2SDIyNFYyNEMyMjQgMTAuNzQ1IDIxMy4yNTUgMCAyMDAgMEgyMDBDMTg2Ljc0NSAwIDE3NiAxMC43NDUgMTc2IDI0Vjk2SDExMlYyNEMxMTIgMTAuNzQ1IDEwMS4yNTUgMCA4OCAwSDg4Qzc0Ljc0NSAwIDY0IDEwLjc0NSA2NCAyNFY5Nkg2NEMyOC42NTQgOTYgMCAxMjQuNjU0IDAgMTYwVjQ4OEMwIDUwMS4yNTUgMTAuNzQ1IDUxMiAyNCA1MTJIMjRDMzcuMjU1IDUxMiA0OCA1MDEuMjU1IDQ4IDQ4OFYxNjBDNDggMTUxLjE2MyA1NS4xNjMgMTQ0IDY0IDE0NEgzMDRWNjRDMzA0IDU1LjE2MyAzMTEuMTYzIDQ4IDMyMCA0OEg0NDhDNDU2LjgzNyA0OCA0NjQgNTUuMTYzIDQ2NCA2NFYyNDBINTc2QzU4NC44MzcgMjQwIDU5MiAyNDcuMTYzIDU5MiAyNTZWNDg4QzU5MiA1MDEuMjU1IDYwMi43NDUgNTEyIDYxNiA1MTJMNjE2IDUxMkM2MjkuMjU1IDUxMiA2NDAgNTAxLjI1NSA2NDAgNDg4VjI1NkM2NDAgMjIwLjY1NCA2MTEuMzQ2IDE5MiA1NzYgMTkyWk00MDQgOTZIMzY0QzM1Ny4zNzUgOTYgMzUyIDEwMS4zNzUgMzUyIDEwOFYxNDhDMzUyIDE1NC42MjUgMzU3LjM3NSAxNjAgMzY0IDE2MEg0MDRDNDEwLjYyNSAxNjAgNDE2IDE1NC42MjUgNDE2IDE0OFYxMDhDNDE2IDEwMS4zNzUgNDEwLjYyNSA5NiA0MDQgOTZaTTQwNCAyODhIMzY0QzM1Ny4zNzUgMjg4IDM1MiAyOTMuMzc1IDM1MiAzMDBWMzQwQzM1MiAzNDYuNjI1IDM1Ny4zNzUgMzUyIDM2NCAzNTJINDA0QzQxMC42MjUgMzUyIDQxNiAzNDYuNjI1IDQxNiAzNDBWMzAwQzQxNiAyOTMuMzc1IDQxMC42MjUgMjg4IDQwNCAyODhaTTQwNCAxOTJIMzY0QzM1Ny4zNzUgMTkyIDM1MiAxOTcuMzc1IDM1MiAyMDRWMjQ0QzM1MiAyNTAuNjI1IDM1Ny4zNzUgMjU2IDM2NCAyNTZINDA0QzQxMC42MjUgMjU2IDQxNiAyNTAuNjI1IDQxNiAyNDRWMjA0QzQxNiAxOTcuMzc1IDQxMC42MjUgMTkyIDQwNCAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function City(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M244 384H204C197.375 384 192 389.375 192 396V436C192 442.625 197.375 448 204 448H244C250.625 448 256 442.625 256 436V396C256 389.375 250.625 384 244 384ZM244 192H204C197.375 192 192 197.375 192 204V244C192 250.625 197.375 256 204 256H244C250.625 256 256 250.625 256 244V204C256 197.375 250.625 192 244 192ZM148 192H108C101.375 192 96 197.375 96 204V244C96 250.625 101.375 256 108 256H148C154.625 256 160 250.625 160 244V204C160 197.375 154.625 192 148 192ZM148 384H108C101.375 384 96 389.375 96 396V436C96 442.625 101.375 448 108 448H148C154.625 448 160 442.625 160 436V396C160 389.375 154.625 384 148 384ZM148 288H108C101.375 288 96 293.375 96 300V340C96 346.625 101.375 352 108 352H148C154.625 352 160 346.625 160 340V300C160 293.375 154.625 288 148 288ZM244 288H204C197.375 288 192 293.375 192 300V340C192 346.625 197.375 352 204 352H244C250.625 352 256 346.625 256 340V300C256 293.375 250.625 288 244 288ZM532 384H492C485.375 384 480 389.375 480 396V436C480 442.625 485.375 448 492 448H532C538.625 448 544 442.625 544 436V396C544 389.375 538.625 384 532 384ZM532 288H492C485.375 288 480 293.375 480 300V340C480 346.625 485.375 352 492 352H532C538.625 352 544 346.625 544 340V300C544 293.375 538.625 288 532 288ZM576 192H512V64C512 28.654 483.346 0 448 0H320C284.654 0 256 28.654 256 64V96H224V24C224 10.745 213.255 0 200 0H200C186.745 0 176 10.745 176 24V96H112V24C112 10.745 101.255 0 88 0H88C74.745 0 64 10.745 64 24V96H64C28.654 96 0 124.654 0 160V488C0 501.255 10.745 512 24 512H24C37.255 512 48 501.255 48 488V160C48 151.163 55.163 144 64 144H304V64C304 55.163 311.163 48 320 48H448C456.837 48 464 55.163 464 64V240H576C584.837 240 592 247.163 592 256V488C592 501.255 602.745 512 616 512L616 512C629.255 512 640 501.255 640 488V256C640 220.654 611.346 192 576 192ZM404 96H364C357.375 96 352 101.375 352 108V148C352 154.625 357.375 160 364 160H404C410.625 160 416 154.625 416 148V108C416 101.375 410.625 96 404 96ZM404 288H364C357.375 288 352 293.375 352 300V340C352 346.625 357.375 352 364 352H404C410.625 352 416 346.625 416 340V300C416 293.375 410.625 288 404 288ZM404 192H364C357.375 192 352 197.375 352 204V244C352 250.625 357.375 256 364 256H404C410.625 256 416 250.625 416 244V204C416 197.375 410.625 192 404 192Z" />
        </Icon>
    </>
}