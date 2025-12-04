<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import TheFrame from '@/components/layout/TheFrame.vue'
import OnboardingContent from '@/components/onboarding/OnboardingContent.vue'
import OnboardingNavigation from '@/components/onboarding/OnboardingNavigation.vue'
import OnboardingPagination from '@/components/onboarding/OnboardingPagination.vue'
import { ONBOARDING_STEPS } from '@/constants/onboarding'

const props = defineProps<{
  step: number
}>()

const router = useRouter()


const currentStep = computed(() => ONBOARDING_STEPS.find((s) => s.step === props.step))
const totalSteps = ONBOARDING_STEPS.length

const goTo = (targetStep: number) => {
  router.push(`/onboarding/${targetStep}`)
}

const goToNext = () => {
  if (props.step < totalSteps) {
    router.push(`/onboarding/${props.step + 1}`)
  } else {
    router.push('/auth')
  }
}
</script>

<template>
  <TheFrame :is-auth="false">
    <Transition name="slide-page">
      <div :key="step" class="w-full h-full flex flex-col absolute top-0 left-0 bg-white">

        <OnboardingContent
          v-if="currentStep"
          :image="currentStep.image"
          :alt="currentStep.alt"
          :description="currentStep.description"
        />

        <OnboardingNavigation
          :current-step="props.step"
          @next="goToNext"
          @go-to="goTo"
        >
          <template #pagination>
            <OnboardingPagination
              :current-step="props.step"
              :total-steps="3"
              @go-to="goTo"
            />
          </template>
        </OnboardingNavigation>

      </div>
    </Transition>
  </TheFrame>
</template>
