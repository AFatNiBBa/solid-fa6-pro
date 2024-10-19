
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `superscript` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=solid superscript}
 * @preview ![superscript](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIgMTQ0QzMzNC4wOTQgMTQ0IDM1MiAxMjYuMDk0IDM1MiAxMDRTMzM0LjA5NCA2NCAzMTIgNjRIMjgxLjc4MUMyNjguNjg4IDY0IDI1Ni40MjIgNzAuNDA2IDI0OC45NTMgODEuMTU2TDE3NiAxODUuOTg0TDEwMy4wNDcgODEuMTU2Qzk1LjU3OCA3MC40MDYgODMuMzEyIDY0IDcwLjIxOSA2NEg0MEMxNy45MDYgNjQgMCA4MS45MDYgMCAxMDRTMTcuOTA2IDE0NCA0MCAxNDRINDkuMzI4TDEyNy4yNzMgMjU2TDQ5LjMyOCAzNjhINDBDMTcuOTA2IDM2OCAwIDM4NS45MDYgMCA0MDhTMTcuOTA2IDQ0OCA0MCA0NDhINzAuMjE5QzgzLjMxMiA0NDggOTUuNTc4IDQ0MS41OTQgMTAzLjA0NyA0MzAuODQ0TDE3NiAzMjYuMDE2TDI0OC45NTMgNDMwLjg0NEMyNTYuNDIyIDQ0MS41OTQgMjY4LjY4OCA0NDggMjgxLjc4MSA0NDhIMzEyQzMzNC4wOTQgNDQ4IDM1MiA0MzAuMDk0IDM1MiA0MDhTMzM0LjA5NCAzNjggMzEyIDM2OEgzMDIuNjcyTDIyNC43MjcgMjU2TDMwMi42NzIgMTQ0SDMxMlpNNDgwLjI4MSAxNjAuMDU3VjMyQzQ4MC4yODEgMjAuMjgxIDQ3My44NzUgOS41IDQ2My41NzggMy45MDZDNDUzLjI2NiAtMS43NSA0NDAuNzgxIC0xLjI1IDQzMC45MDYgNS4xMjVMMzk4LjkwNiAyNS44MTJDMzg0LjA2MiAzNS40MDYgMzc5LjgxMiA1NS4yMTkgMzg5LjQwNiA3MC4wNjJDMzk1LjUzMSA3OS41MzEgNDA1Ljc5NyA4NC42ODcgNDE2LjI4MSA4NC42ODdWMTYwSDQxNkMzOTguMzI4IDE2MCAzODQgMTc0LjMxMiAzODQgMTkyUzM5OC4zMjggMjI0IDQxNiAyMjRINDgwQzQ5Ny42NzIgMjI0IDUxMiAyMDkuNjg4IDUxMiAxOTJDNTEyIDE3NC40MTIgNDk3LjgxNCAxNjAuMjE3IDQ4MC4yODEgMTYwLjA1N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Superscript(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M312 144C334.094 144 352 126.094 352 104S334.094 64 312 64H281.781C268.688 64 256.422 70.406 248.953 81.156L176 185.984L103.047 81.156C95.578 70.406 83.312 64 70.219 64H40C17.906 64 0 81.906 0 104S17.906 144 40 144H49.328L127.273 256L49.328 368H40C17.906 368 0 385.906 0 408S17.906 448 40 448H70.219C83.312 448 95.578 441.594 103.047 430.844L176 326.016L248.953 430.844C256.422 441.594 268.688 448 281.781 448H312C334.094 448 352 430.094 352 408S334.094 368 312 368H302.672L224.727 256L302.672 144H312ZM480.281 160.057V32C480.281 20.281 473.875 9.5 463.578 3.906C453.266 -1.75 440.781 -1.25 430.906 5.125L398.906 25.812C384.062 35.406 379.812 55.219 389.406 70.062C395.531 79.531 405.797 84.687 416.281 84.687V160H416C398.328 160 384 174.312 384 192S398.328 224 416 224H480C497.672 224 512 209.688 512 192C512 174.412 497.814 160.217 480.281 160.057Z" />
        </Icon>
    </>
}