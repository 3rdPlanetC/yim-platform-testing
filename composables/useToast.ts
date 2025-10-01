export function useToast() {
	function ok(msg: string) {
		alert(msg)
	}
	function err(msg: string) {
		alert(msg)
	}
	return { ok, err }
}
