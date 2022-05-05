export const utils = {
    computed: {
        getFeedbackError () {
            return this.feedbackError
        },
        getFeedbackSuccess () {
            return this.feedbackSuccess
        }
    },
    methods: {
        resetFeedbackMessages () {
            this.feedbackError = ''
            this.feedbackSuccess = ''
        },
        updateFeedbackMessage (value) {
            if (value.success) {
                this.feedbackSuccess = value.message
            } else {
                this.feedbackError = value.message
            }

            setTimeout(() => {
                this.resetFeedbackMessages()
            }, 3000)
        }
    }
}
