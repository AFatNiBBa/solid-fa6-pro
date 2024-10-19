
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shop` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=regular shop}
 * @preview ![shop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzUuNzQ4IDE3Ni4xMjVMNTQ0LjI0OCAxNi4xMjVDNTM4LjU0NiA2LjE1MyA1MjcuOTM5IDAgNTE2LjQ1MSAwSDEyMy41NDZDMTEyLjA1OCAwIDEwMS40NTEgNi4xNTMgOTUuNzQ4IDE2LjEyNUw0LjI0OCAxNzYuMTI1Qy03Ljg3NyAxOTcuNSA3LjM3MyAyMjQgMzEuOTk4IDIyNEg2My45OThMNjQgNDY0QzY0IDQ5MC41MSA4NS40OSA1MTIgMTEyIDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRMMzgzLjk5OCAyMjRINTI3Ljk5OFY0ODhDNTI3Ljk5OCA1MDEuMiA1MzguNzk4IDUxMiA1NTEuOTk4IDUxMkg1NTEuOTk4QzU2NS4xOTggNTEyIDU3NS45OTggNTAxLjIgNTc1Ljk5OCA0ODhWMjI0SDYwNy45OThDNjMyLjYyMyAyMjQgNjQ3Ljg3MyAxOTcuNSA2MzUuNzQ4IDE3Ni4xMjVaTTMzNS45OTggNDY0SDExMS45OThWMzY4LjI1SDMzNS45OThWNDY0Wk0zMzUuOTk4IDMyMC4yNUgxMTEuOTk4VjIyNEgzMzUuOTk4VjMyMC4yNVpNNTkuNjIzIDE3NkwxMzIuNzQ4IDQ4SDUwNy4yNDhMNTgwLjI0OCAxNzZINTkuNjIzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Shop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M635.748 176.125L544.248 16.125C538.546 6.153 527.939 0 516.451 0H123.546C112.058 0 101.451 6.153 95.748 16.125L4.248 176.125C-7.877 197.5 7.373 224 31.998 224H63.998L64 464C64 490.51 85.49 512 112 512H336C362.51 512 384 490.51 384 464L383.998 224H527.998V488C527.998 501.2 538.798 512 551.998 512H551.998C565.198 512 575.998 501.2 575.998 488V224H607.998C632.623 224 647.873 197.5 635.748 176.125ZM335.998 464H111.998V368.25H335.998V464ZM335.998 320.25H111.998V224H335.998V320.25ZM59.623 176L132.748 48H507.248L580.248 176H59.623Z" />
        </Icon>
    </>
}