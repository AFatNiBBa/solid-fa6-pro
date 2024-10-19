
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rv` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rv?s=solid rv}
 * @preview ![rv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjEuMTI5IDI2OS4yNTlMNTYyLjg5IDIxMS4wMDdDNTUwLjg5MiAxOTkuMDA3IDUzNC41MjEgMTkyLjI1NiA1MTcuNTI0IDE5Mi4yNTZMNDE1LjkxOSAxOTIuMDA2VjQzMi4wMTRINDE2LjE2OUM0MTYuMTY5IDQ2Ni4xNDEgNDM4LjE2NCA0OTguMjY3IDQ3MS4wMzMgNTA4LjI2N0M1MjUuNzcyIDUyNC43NjggNTc2LjAxMyA0ODQuMjY2IDU3Ni4wMTMgNDMyLjAxNFY0MTYuMDE0SDYwOC4wMDZDNjI1LjYyOCA0MTYuMDE0IDY0MCA0MDEuNjM4IDY0MCAzODQuMDEzVjMxNC41MTFDNjM5Ljg3NSAyOTcuNTEgNjMzLjEyNiAyODEuMjU5IDYyMS4xMjkgMjY5LjI1OVpNNDk1LjkwMyA0NjQuMDE2QzQ3OC4yODIgNDY0LjAxNiA0NjMuOTA5IDQ0OS42NCA0NjMuOTA5IDQzMi4wMTRDNDYzLjkwOSA0MTQuMzg5IDQ3OC4yODIgNDAwLjAxMyA0OTUuOTAzIDQwMC4wMTNDNTEzLjUyNSA0MDAuMDEzIDUyNy44OTcgNDE0LjM4OSA1MjcuODk3IDQzMi4wMTRDNTI3Ljg5NyA0NDkuNjQgNTEzLjUyNSA0NjQuMDE2IDQ5NS45MDMgNDY0LjAxNlpNNDc5LjkwNiAyODguMDFWMjQwLjAwOEg1MTcuMzk5QzUyMS42NDggMjQwLjAwOCA1MjUuNjQ3IDI0MS43NTggNTI4LjY0NyAyNDQuNzU4TDU3Mi4wMTMgMjg4LjAxSDQ3OS45MDZaTTYwNy44ODEgMTI3LjI1NEM2MDcuNTA2IDc0LjYyNyA1NjQuNjQgMzIuMDAxIDUxMS45IDMyLjAwMUgzODMuOTI1VjE2LjAwMUMzODMuOTI1IDcuMjUgMzc2LjY3NiAwIDM2Ny45MjggMEgyMzkuOTUzQzIzMS4yMDUgMCAyMjMuOTU2IDcuMjUgMjIzLjk1NiAxNi4wMDFWMzIuMDAxSDYzLjk4OEMyOC43NDQgMzIuMDAxIDAgNjAuNzUyIDAgOTYuMDAzVjI5My41MUMwIDMxMC41MSA2Ljc0OSAzMjYuNzYxIDE4Ljc0NiAzMzguNzYxTDk1Ljk4MSA0MTYuMDE0VjQyNy4zODlDOTUuOTgxIDQ2OS4yNjYgMTI2LjEgNTA3LjM5MiAxNjcuNzE3IDUxMS41MTdDMjE1LjcwOCA1MTYuMjY3IDI1NS45NSA0NzguNzY2IDI1NS45NSA0MzEuODg5VjQxNS44ODlIMzgzLjkyNVYxNjAuMDA1SDU3NS44ODhDNTkzLjc1OSAxNjAuMDA1IDYwOC4wMDYgMTQ1LjI1NSA2MDcuODgxIDEyNy4yNTRaTTE3NS45NjYgNDY0LjAxNkMxNTguMzQ0IDQ2NC4wMTYgMTQzLjk3MiA0NDkuNjQgMTQzLjk3MiA0MzIuMDE0QzE0My45NzIgNDE0LjM4OSAxNTguMzQ0IDQwMC4wMTMgMTc1Ljk2NiA0MDAuMDEzUzIwNy45NTkgNDE0LjM4OSAyMDcuOTU5IDQzMi4wMTRDMjA3Ljk1OSA0NDkuNjQgMTkzLjU4NyA0NjQuMDE2IDE3NS45NjYgNDY0LjAxNlpNMjU1Ljk1IDIwOC4wMDdDMjU1Ljk1IDIxNi43NTcgMjQ4LjcwMSAyMjQuMDA4IDIzOS45NTMgMjI0LjAwOEgxMTEuOTc4QzEwMy4yMyAyMjQuMDA4IDk1Ljk4MSAyMTYuNzU3IDk1Ljk4MSAyMDguMDA3VjE0NC4wMDVDOTUuOTgxIDEzNS4yNTUgMTAzLjIzIDEyOC4wMDQgMTExLjk3OCAxMjguMDA0SDIzOS45NTNDMjQ4LjcwMSAxMjguMDA0IDI1NS45NSAxMzUuMjU1IDI1NS45NSAxNDQuMDA1VjIwOC4wMDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Rv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M621.129 269.259L562.89 211.007C550.892 199.007 534.521 192.256 517.524 192.256L415.919 192.006V432.014H416.169C416.169 466.141 438.164 498.267 471.033 508.267C525.772 524.768 576.013 484.266 576.013 432.014V416.014H608.006C625.628 416.014 640 401.638 640 384.013V314.511C639.875 297.51 633.126 281.259 621.129 269.259ZM495.903 464.016C478.282 464.016 463.909 449.64 463.909 432.014C463.909 414.389 478.282 400.013 495.903 400.013C513.525 400.013 527.897 414.389 527.897 432.014C527.897 449.64 513.525 464.016 495.903 464.016ZM479.906 288.01V240.008H517.399C521.648 240.008 525.647 241.758 528.647 244.758L572.013 288.01H479.906ZM607.881 127.254C607.506 74.627 564.64 32.001 511.9 32.001H383.925V16.001C383.925 7.25 376.676 0 367.928 0H239.953C231.205 0 223.956 7.25 223.956 16.001V32.001H63.988C28.744 32.001 0 60.752 0 96.003V293.51C0 310.51 6.749 326.761 18.746 338.761L95.981 416.014V427.389C95.981 469.266 126.1 507.392 167.717 511.517C215.708 516.267 255.95 478.766 255.95 431.889V415.889H383.925V160.005H575.888C593.759 160.005 608.006 145.255 607.881 127.254ZM175.966 464.016C158.344 464.016 143.972 449.64 143.972 432.014C143.972 414.389 158.344 400.013 175.966 400.013S207.959 414.389 207.959 432.014C207.959 449.64 193.587 464.016 175.966 464.016ZM255.95 208.007C255.95 216.757 248.701 224.008 239.953 224.008H111.978C103.23 224.008 95.981 216.757 95.981 208.007V144.005C95.981 135.255 103.23 128.004 111.978 128.004H239.953C248.701 128.004 255.95 135.255 255.95 144.005V208.007Z" />
        </Icon>
    </>
}