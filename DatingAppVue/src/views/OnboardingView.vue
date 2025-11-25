<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import TheFrame from '@/components/layout/TheFrame.vue'
import OnboardingContent from '@/components/onboarding/OnboardingContent.vue'
import OnboardingNavigation from '@/components/onboarding/OnboardingNavigation.vue'
import OnboardingPagination from '@/components/onboarding/OnboardingPagination.vue'

const props = defineProps<{
  step: number
}>()

const router = useRouter()

const stepsData = [
  {
    step: 1,
    image: '/img/illustration1.png',
    alt: 'Meet New People',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus tellus quis est pharetra fermentum. Curabitur dapibus neque id lacus hendrerit rhoncus.',
  },
  {
    step: 2,
    image: '/img/illustration2.png',
    alt: 'Born This Way',
    description:
      'Maecenas at ullamcid risla. Integer sollicitutdin sapien at nislneg egestas fringilla donec. Sed elementum vehicula risus eu finac corporss arcu sit.',
  },
  {
    step: 3,
    image: '/img/illustration3.png',
    alt: 'Couples on a Date',
    description:
      'Nam vitae commodo Vulto.Among sea qui ipscrh congue comodo ac biltagus.Donec eecendal rutrus dublca.Aliquam emit molestie odio et pulvinar.',
  },
]

const currentStep = computed(() => stepsData.find((s) => s.step === props.step))

const goTo = (targetStep: number) => {
  router.push(`/onboarding/${targetStep}`)
}

const goToNext = () => {
  if (props.step < 3) {
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
