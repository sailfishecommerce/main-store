import { useAtomValue } from 'jotai/utils'
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsResult,
} from 'next'
import { memo, useMemo } from 'react'
import isEqual from 'react-fast-compare'

import { useUrlSync } from '@/components/@instantsearch/hooks/useUrlSync'
import { configAtom } from '@/components/algolia/config'
import { useUserToken } from '@/hooks/useUserToken'
import { isBrowser } from '@/lib/browser'
import { appId, searchApiKey, indexName } from '@/lib/env'
import { getResultsState } from '@/lib/getResultsState'
import { Search } from '@/components/@instantsearch/search'
import { urlToSearchState } from "@/components/@instantsearch/utils/url";

import { searchClientAtom } from "@/layouts/page/app-layout";
import { BasicPageLayout } from "@/layouts/page/basic-page-layout";
import type { BasicPageLayoutProps } from "@/layouts/page/basic-page-layout";

export type SearchPageLayoutProps = BasicPageLayoutProps & {
  resultsState?: any
  searchState?: any
  userToken?: string
}

function SearchPageLayoutComponent({
  children,
  resultsState,
  searchState: initialSearchState,
  userToken: initialUserToken,
  ...props
}: SearchPageLayoutProps) {
  const { searchParameters: configSearchParameters } = useAtomValue(configAtom)
  const searchClient = useAtomValue(searchClientAtom)
  const { searchState, onSearchStateChange, createURL } = useUrlSync()
  const userTokenHookValue = useUserToken()
  const userToken = userTokenHookValue ? userTokenHookValue : initialUserToken

  const searchParameters = useMemo(
    () => ({
      userToken,
      enablePersonalization: Boolean(userToken),
      ...configSearchParameters,
    }),
    [userToken, configSearchParameters]
  )

  return (
    <BasicPageLayout>
      <Search
        indexName={indexName}
        searchClient={searchClient}
        searchState={isBrowser ? searchState : initialSearchState}
        searchParameters={searchParameters}
        resultsState={resultsState}
        createURL={createURL}
        onSearchStateChange={onSearchStateChange}
        {...props}
      >
        {children}
      </Search>
    </BasicPageLayout>
  )
}

export const SearchPageLayout = memo(SearchPageLayoutComponent, isEqual)

export type GetServerSidePropsOptions = GetServerSidePropsResult<any>
export type GetStaticPropsOptions = GetStaticPropsResult<any>

export const getPropsPage = async (
  component: React.ElementType,
  url?: string,
  options?: GetServerSidePropsOptions | GetStaticPropsOptions
) => {
  const { props, ...customOptions } = (options as { props: any }) || {}

  const searchState = urlToSearchState(url)
  const resultsState = await getResultsState({
    component,
    searchState,
    appId,
    searchApiKey,
    indexName,
    ...props,
  })

  return {
    props: {
      ...props,
      searchState,
      resultsState,
    },
    ...customOptions,
  }
}

export const getServerSidePropsPage = (
  component: React.ElementType,
  context: GetServerSidePropsContext,
  options?: GetServerSidePropsOptions,
  url?: string
) => {
  const customOptions = (options as { props: any }) || {}

  const userTokenCookie = context.req.cookies._ALGOLIA
  if (userTokenCookie) {
    customOptions.props = {
      ...customOptions.props,
      userToken: userTokenCookie,
    }
  }

  return getPropsPage(
    component,
    url || context.resolvedUrl || '',
    customOptions
  )
}

export const getStaticPropsPage = (
  component: React.ElementType,
  url?: string,
  options?: GetServerSidePropsOptions
) => getPropsPage(component, url, options)
